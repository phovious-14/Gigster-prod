// hooks.ts

import { useQuery } from '@tanstack/react-query'
import { fetchUserType, fetchBounties } from '../utils/apiFunctions'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export const useUserType = (address: string | undefined) => {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)

  const { data, isLoading, error } = useQuery({
    queryKey: ['userType', address],
    queryFn: () => fetchUserType(address || ''),
    enabled: !!address,
    retry: false,
    onSuccess: (data) => {
      console.log('User data received:', data)
      if (data.userType === '') {
        console.log('No user type, redirecting to home')
        router.push('/')
      } else {
        console.log('Setting user type:', data.userType)
        localStorage.setItem('userType', data.userType)
        setUser(data)
      }
    },
  })

  return { userData: user, isLoading, error }
}

export const useBounties = (address: string | undefined, userType: string | undefined) => {
  console.log(address, userType);

  
  return useQuery({
    queryKey: ['bounties', address, userType],
    queryFn: () => fetchBounties(address || "", userType || ""),
    // enabled: !!address && !!userType,
    retry: false,
  })
}