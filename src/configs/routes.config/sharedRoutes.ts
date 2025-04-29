import {lazy} from 'react';
import {AppRoute} from '@/types/route.types';

const sharedRoutes:AppRoute[]=[{
    key:'shared.home',
    path:'/',
    component:lazy(() => import('@/views/Home')),
    exact:true,
    title:'Home',
    authority:[], 
  },
];
export default sharedRoutes;
