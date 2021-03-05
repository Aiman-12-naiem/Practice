const Contact = ({contacts}) => {
    return (
        <div>
            <h2>Contact Page</h2>
            {contacts.map((contact) =>  (
                <div className="card mt-4">
                    <div className="card-header">{contact.name}</div>
                    <div className="card-body">
                        <p className="float-left">{contact.phone}</p>
                        <p className="float-right">{contact.email}</p>
                        <img src={contact.imgUrl} alt=""/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Contact;