import { useState } from 'react'
// Ямар нэг hook ашиглаж байж л өөрөө hook болж чадна
// үгүй бол function биччихлээ л гэсэн үг

export const useInput = (initialValue) => {
    // input -ийн анхны утгыг өгөх боломжтой болгож байна
    const [value, setValue] = useState(initialValue);

    // resetValue function -ыг input утгыг reset хийх боломжтой болгох function нэмлээ
    const resetValue = () => setValue(initialValue);

    // bind object-ийг input элементтэй холбоход ашиглана
    const bind = {
        value, //ES6 бичиглэлээр зөвхөн value болгох боломжтой
        onChange: (e) => setValue(e.target.value)
    }
    
    // буцаах утгууд
    return [value, bind, resetValue]
}

// за одоо hook ээ ашиглая