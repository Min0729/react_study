import { useState } from "react";

export default function Word(props){

    const [word, setWord] = useState(props.word);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(props.word.isDone);

    function toggleShow(){
        setIsShow(!isShow);
    }

    function toggleDone(){
        fetch(`http://localhost:3001/words/${props.word.id}`, {
            method: "PUT",
            headers : {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({
                // ...props.word,
                id: props.word.id,
                eng: props.word.eng,
                kor: props.word.kor,
                isDone : !isDone,
            }),
        })
        .then(res => {
            if(res.ok){
                setIsDone(!isDone);
            }
        });
    }

    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${props.word.id}`,{
                method:'DELETE'
            }).then(res => {
                if(res.ok){
                    setWord({id : 0});
                }
            })
        }
    }

    if(props.word.id === 0){
        return null;
    }

    return(
        <tr className={isDone ? 'off' : ''}>
                        <td><input type="checkbox" checked={isDone}
                            onChange={toggleDone}
                        /></td>
                        <td>
                            {props.word.eng}
                        </td>
                        <td>
                            {isShow && props.word.kor}
                        </td>
                        <td>
                            <button onClick={toggleShow}>뜻 {isShow ? '숨기기' : '보기'}</button>
                            <button onClick={del} className="btn_del">삭제</button>
                        </td>
                    </tr>
    );
}