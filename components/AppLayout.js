import Header from "./Header";
import BodyComponent from "./BodyComponent";
import {BinarySearch} from "./BinarySearch";

const AppLayout = ()=> (
    <div className="app-container">
        <BinarySearch/>
        <Header/>
        <BodyComponent/>
    </div>
    
);

export default AppLayout;