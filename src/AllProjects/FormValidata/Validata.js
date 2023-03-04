 export const Validate = (data , type) => {
    const errors = {};

    if (type === "signin"){
        if (!data.name.trim()){
            errors.name = "Name Is Required";
        }else {
            delete errors.name;
        }

        if (!data.confPass){
            errors.confPass = "confPass Is Required";
        }else if (data.pass !== data.confPass){
            errors.confPass = "ConfPass is False";
        }else {
            delete errors.confPass;
        }

        if (!data.law){
            errors.law = "law Is Required";
        }else {
            delete errors.law;
        }
    }

    if (!data.email){
        errors.email = "Email Is Required";
    }else if (!data.email.includes('@gmail.com')){
        errors.email = "Email Address Is Invalid";
    }else {
        delete errors.email;
    }

    if (!data.pass){
        errors.pass = "Pass Is Required";
    }else if (data.pass.length < 6){
        errors.pass = "Pass need to be 6 character or more";
    }else {
        delete errors.pass;
    }



    return errors;
 }