import {Container, Typography} from "@mui/material";
import './App.css';
import VstupForm from "./components/VstupForm";
import {NewPostForm} from "./components/NewPost/NewPostForm";


function App() {
    const cities = ["Житомир", "Київ", "Вінниця", "Тернопіль", "Львів", "Одеса", "Херсон", "Запоріжжя", "Донецьк", "Харків", "Луганськ"];
    const palletType = ["Палета від 1,5 м2 до 2 м2 (814)", "Палета від 1,5 м2 до 2 м2 (815)", "Палета від 1,5 м2 до 2 м2 (816)", "Палета від 1 м2 до 1,49 м2 (612)"];
    const deliveryType = ["Посилки", "Палети"];
    const returnType = ["Документи", "Грошовий переказ"];
    const packing = ["Конверт з ПБ плівкою С/13 (150х215) мм", "Конверт з ПБ плівкою D/14 (180х265) мм", "Конверт з ПБ плівкою E/15 (220х265) мм", "Коробка (0.5 кг) пласка", "Коробка (0.5 кг) стандартна", "Коробка (0.5 кг) з наповнювачем", "Коробка (10 кг) стандартна"];

    return (
        <Container>

            <VstupForm/>
            <Typography variant="h4" textAlign={"left"}>NewPost Form</Typography>
            <NewPostForm cityOptions={cities} palletTypeOptions={palletType} deliveryTypeOptions={deliveryType}
                         returnTypeOptions={returnType} packingOptions={packing}/>
        </Container>
    );
}

export default App;
