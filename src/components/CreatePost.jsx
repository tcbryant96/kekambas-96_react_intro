import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost(props) {
    let navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(localStorage);

        
        let token = localStorage.getItem('token')
        console.log(token)
        let myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' +token )
        myHeaders.append('Content-Type', 'application/json');
        let formData = JSON.stringify({
            title: e.target.title.value,
            body: e.target.body.value,
        })
        fetch('http://localhost:5000/api/posts', {
            method: 'POST',
            headers: myHeaders,
            body: formData
        })
        .then(res => res.json())
             .then(data => {
                 if (data.error){
                     console.error(data.error)
                 } else {
                     props.flashMessage('Post created', 'success')
                     navigate('/')
                 }
             })
     }



    

    return (
        <>

            <div className="container">
                <div className="row">

                    <div className="col-md-8 col-md-offset-2">

                        <h1>Create post</h1>

                        <form action="" onSubmit={handleSubmit}>

                            <div className="form-group">
                                <label htmlFor="title">Title *</label>
                                <input type="text" className="form-control" name="title" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea rows="5" className="form-control" name="body" ></textarea>
                            </div>

                            <div className="form-group">
                                <p>* required fields</p>
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary col-9 me-4">
                                    Create
                                </button>
                                <button className="btn btn-danger">
                                    Cancel
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}
