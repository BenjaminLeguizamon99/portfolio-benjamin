import { useContext } from "react";
import VariosContext from "../context/VariosProvider";

const useVarios = () => {
    return useContext(VariosContext)
}

export default useVarios;