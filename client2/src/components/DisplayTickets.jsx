function DisplayTickets(){
    return(
        <>
            {[...Array(10)].map((x, i) => 
                (<div className="row">
                    <div className="col-8">
                        information here {i}
                    </div>
                    <div className="col-4">
                        date of submission
                    </div>
                </div>)
            )}
        </>
    );
}

export default DisplayTickets;