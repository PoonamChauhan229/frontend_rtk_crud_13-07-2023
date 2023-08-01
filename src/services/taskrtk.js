// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { taskListUrl } from '../utils/constants'


// Define a service using a base URL and expected endpoints
export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({ baseUrl: taskListUrl}),
  tagTypes:["taskModel"],
  endpoints: (builder) => ({
    // Get All Task
    getAllTask: builder.query({
      query: () =>({
        url:"task",
        method:"GET",
        headers:{
          token:sessionStorage.getItem('token')
        }
      }),
      providesTags: ["taskModel"],
    }),
   
    //


    // Get Task By ID
    getTaskById:builder.query({
      query: (id) =>({
        url:`/task/${id}`,
        method:"GET",
        headers:{
          token:sessionStorage.getItem('token')
        }
      }),
      providesTags: ["taskModel"],
    }),

     // Delete Task By ID
     deleteTaskById: builder.mutation({
      query: (taskId) => ({
        url: `/task/${taskId}`,
        method: "DELETE",
        headers:{
          token:sessionStorage.getItem('token')
        }
      }),
      invalidatesTags: ["taskModel"],
    }),

    //Update By ID
    
    updateTaskById: builder.mutation({
      query: (updatedTask) => {
          console.log(updatedTask);
          return {
              url: `/task/${updatedTask._id}`,
              method: "PUT",
              body: updatedTask, // Task which was updated
              headers: {
                  token: sessionStorage.getItem('token'),
                  'Content-type': 'application/json; charset=UTF-8'
              }
          };
      },
      invalidatesTags: ["taskModel"],
  }),
  

    //create Task:
    addNewTask: builder.mutation({
      query: (newTask) => {
        console.log(newTask);
        return {
          url: `addtask`,
          method: 'POST',
          body: newTask,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            token:sessionStorage.getItem('token')
          },
        };
      },
      invalidatesTags: ['taskModel'],
    }),

  })
})
export const { useGetAllTaskQuery,useGetTaskByIdQuery,useDeleteTaskByIdMutation,useUpdateTaskByIdMutation,useAddNewTaskMutation,useLogoutMutation} = taskApi
