

import {FaUserGraduate} from 'react-icons/fa';
import Student from './views/student/Student';
import Students from './views/student/Students';



const routes = [{
    name:'Students',
    path:'/student',
    icon:FaUserGraduate,
    component:Students,
    layout:'/admin',
    show:true
},{
    name:'Student Page',
    path:'/studentpage/:id',
    icon:null,
    component:Student,
    layout:'/admin',
    show:false
}]


export default routes;