import api from '@/libs/api_settings';
import { analyticsStore } from '@/store/clients';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const BoardContainer = ({children}) => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["dashboard_info"],
    queryFn: async () => {
      const response = await api.get('admin/dashboard')
      return response.data;
    },
    staleTime: 5 * 1000,
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-10 flex justify-center items-center w-full">
        <p className="px-2 py-1 border text-black text-sm capitalize">
          Error while fetching data. Try again
        </p>
      </div>
    );
  }

   // Map through children and clone each element with additional props
   const childrenWithProps = React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // Clone the child element with additional props
      return React.cloneElement(child, { data });
    }
    return child; // Return the child as is if not a valid React element
  });

  return (
    <div>
      {childrenWithProps}
    </div>
  )
}

export default BoardContainer
