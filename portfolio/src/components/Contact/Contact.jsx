


function Contact() {
    return(
        <>
        <div className="address">
            <form action="">
                <label htmlFor="">Here is my name</label><br />
                <input type="text" placeholder="Kombou Daniel" /><br /><hr />
                <label htmlFor="">My Email</label><br />
                <input type="email" placeholder="danielkombou7@gmail.com" /><br /><hr />
                <label htmlFor="">Tel</label><br />
                <input type="number" placeholder="650-50-35-44" /><hr />
                <label htmlFor="">Location</label><br />
                <input type="text" placeholder="Cameroon/Yaounde/Bonas" />
            </form>
        </div>
        </>
    )
}

export default Contact;