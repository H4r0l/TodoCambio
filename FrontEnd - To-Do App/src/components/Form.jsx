import React, { useState } from "react";

const Form = ({ addTodo }) => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim() === "") return;

        addTodo({ title: inputValue, completed: false });
        setInputValue("");
    };
    
    return (
        <form className="ui form btn btn-lg rounded mx-auto " onSubmit={handleFormSubmit}>
            <div className="d-flex flex-row bd-highlight mb-3">
                <div className="line">
                    <div className="column five wide ">
                        <input className="border border-dark border-3 rounded-5 w-100 h-20 px-4 p-2 bd-highlight" 
                            value={inputValue}
                            onChange={handleInputChange}
                            type="text white"
                            placeholder="Enter something to do..."
                            style={{fontFamily: "'Fredoka', sans-serif", backgroundColor: "#B5B0B0"}}
                        />
                    </div>
                    
                    <div className="column one wide">
                        <button type="submit" className="ui button circular icon green"><i className="white plus icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;