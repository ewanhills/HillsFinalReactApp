import React, { Component } from 'react';



class Crud extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            title: 'Crud Feedback application for the user!!!',
            act: 0,
            index: '',
            datas: []
        }
    }

    componentDidMount() {
        this.refs.name.focus();
    }

    uSubmit = (e) =>{
        e.preventDefault();
        console.log('try')

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let email = this.refs.email.value;
        let number = this.refs.number.value;

            if(this.state.act === 0){

                let data = {
                    name, email, number
                }
            
        datas.push(data);
            }
            else{
                let index = this.state.index;
                datas[index].name = name;
                datas[index].email = email;
                datas[index].number = number;
            }

        this.setState({
            datas: datas,
            act: 0
            
        });

       
        this.refs.name.focus();
    
    }

    uRemove = (i) => {
        let datas = this.state.datas;
        datas.splice(i,1);
        this.setState({
          datas: datas
        });
    
        
        this.refs.name.focus();
      }

      


    uEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value =data.name;
        this.refs.value = data.email;
        this.refs.value = data.values;

        this.setState({
    act: 1,
    index: i

        });
        
        this.refs.name.focus();

    }

 


    

    render() {
        let datas = this.state.datas;
        return (
            <div className="Crud">
                <h2>{this.state.title}</h2>
                <form ref="userFeedback" className="userFeedback">
                    <input type="text" ref="name" placeHolder="Enter your feedback here please"
                        classsName="userEntry" />

                    <input type="text" ref="email" placeHolder="Enter your email here please"
                        classsName="userEntry" />

                    <input type="text" ref="number" placeHolder="Enter your number 
                    here so we can contact you if you wish!!!!"
                        classsName="userEntry" />


                    <button onClick={(e)=>this.uSubmit(e)} className="userButton">submit</button>
                </form>
                <pre>
                {datas.map((data, i) =>
                    <li key={i} className="myList">
                        {i+1}.{data.name}, {data.email}, {data.number}
                        <button onClick={()=>this.uRemove(i)} className="userButton">delete</button>
                        <button onClick={()=>this.uEdit(i)} className="userButton">Edit</button>
                        
                    </li>
                    )}
                </pre>
            </div>
        );
    }
}




export default Crud;
