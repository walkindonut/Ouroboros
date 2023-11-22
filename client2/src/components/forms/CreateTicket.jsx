function CreateTicket() {
    return (
        <>
            <textarea id="w3review" name="w3review" rows="4" cols="50">
                At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
            </textarea>

            <div className="d-grid gap-2 col-6 mx-auto">
                <button class="btn btn-primary" type="button">Save</button>
            </div>
        </>
    );
}

export default CreateTicket;