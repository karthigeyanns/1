import './Assets/style.css';
import {Activity,User,Contact,Award,Accessibility} from 'lucide-react';
import {Headphones,Battery,Plug,Computer,Pi,Diameter,Plus,Pencil,Pen} from 'lucide-react';
const App= () =>
{
    return(
        <>
            <h1 style={{textAlign:'center'}}>Icon Table</h1>
        <table border={2} style={{justifyContent:'center',alignItems:'center'}}>
            <tr>
                <td><Activity size={20} color='red' strokeWidth={1}/></td>
                <td><User size={20} color='red' strokeWidth={1}/></td>
                <td><Contact size={20} color='red' strokeWidth={1}/></td>
                <td><Award size={20} color='red' strokeWidth={1}/></td>
            </tr>
            <tr>
                <td><Accessibility size={20} color='red' strokeWidth={1}/></td>
                <td><Headphones size={20} color='red' strokeWidth={1}/></td>
                <td><Battery size={20} color='red' strokeWidth={1}/></td>
                <td><Pi size={20} color='red' strokeWidth={1}/></td>
            </tr>
            <tr>
                <td><Plug size={20} color='red' strokeWidth={1}/></td>
                <td><Computer size={20} color='red' strokeWidth={1}/></td>
                <td><Diameter size={20} color='red' strokeWidth={1}/></td>
                <td><Plus size={20} color='red' strokeWidth={1}/></td>
            </tr>
            <tr>
                <td><Pencil size={20} color='red' strokeWidth={1}/></td>
                <td><Pen size={20} color='red' strokeWidth={1}/></td>
                <td><Contact size={20} color='red' strokeWidth={1}/></td>
                <td><Award size={20} color='red' strokeWidth={1}/></td>
            </tr>
        </table>
        </>
    )
}
export default App;