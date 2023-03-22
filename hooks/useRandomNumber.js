import React, {useState, useEffect} from "react";
import random from "lodash.random";


export function useRandomNumber({min, max}) {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(random(min, max))
    },[min, max])

    return width
}
