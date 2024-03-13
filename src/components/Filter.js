

const Filter = (props) => {
    let filterData = props.filterData;
    return (
        <div>
            {
                // eh saare nu curly brackets andar pauna nhi bhulna
                filterData.map( (data) =>{
                    // ethe return bhul skde aa
                    return ( 
                        <button key={data.id}>  
                            {data.title}
                        </button>
                    );
                } )
            }
        </div>
    );
}

export default Filter;