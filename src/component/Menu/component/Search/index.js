import React from "react";
import { StyledSearch } from "./style"


export default function Search({valorDoFiltro, setvalorDoFiltro}) {
    const valorDaBusca = valorDoFiltro
    const setValorDaBusca = setvalorDoFiltro
    return (
        <StyledSearch>
            <input type="text" onChange={(e) => {
                setValorDaBusca(e.target.value) 
            }} value={valorDaBusca} />
            <button>
                🔎
            </button>
        </StyledSearch>
    )
}