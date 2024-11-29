import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "./useTodos";
import { CACHE_KEY_TODOS } from "../constansts";
import APIClient from "../services/apiClient";


const apiClient=new APIClient<Todo>('/todos')

interface AddTodoContext {
    previousTodos: Todo[];
  }


const useAddTodos=(onAdd:()=>void)=>{
    const queryClient = useQueryClient();
    return useMutation<Todo, Error, Todo, AddTodoContext>({
        mutationFn: apiClient.post,
    
        onMutate: (newTodo: Todo) => {
          const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
            newTodo,
            ...(todos || []),
          ]);
          
          onAdd()
          return { previousTodos };
        },
        onSuccess: (savedTodo, newTodo) => {
          //approach 1 for other backends , we can use invalidating cache to update or refetch the new data
          // queryClient.invalidateQueries({ queryKey: ["todos"] });
          //approach 2: for json placeholder , updating the cache
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) =>
            todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
          );
          
        },
        onError: (error, newTodo, context) => {
          if (!context) return;
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, context.previousTodos);
        },
      });

}
export default useAddTodos