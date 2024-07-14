import { useState } from "react"

export default function useInput (innitialValue: () => string) {
    const [searchQuerry, setSearchQuerry] = useState(innitialValue)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuerry(e.target.value)
    };

    return {
        searchQuerry, handleInputChange
    }
}