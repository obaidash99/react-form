import React from "react";

const UserForm = () => {
   state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      bio: '',
   }

   // Proceed to next step
   nextStep= () => {
      const {step} = this.state;
      this.setState ({
         step: step + 1
      });
   }

   // Back to previous step
   prevStep= () => {
      const {step} = this.state;
      this.setState ({
         step: step -1
      });
   }

   // Handle fields change
   handleChange = input => e => {
      this.setState({[input]: e.target.value});
   }

   const {step} = this.state;
   const {firstName,lastName,email,occupation,city,bio} = this.state;
   const values = {firstName,lastName,email,occupation,city,bio}


      return (
         
      );
}
 
export default UserForm;