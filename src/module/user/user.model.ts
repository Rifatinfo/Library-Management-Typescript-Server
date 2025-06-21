import { model, Schema } from "mongoose";

const userSchema = new Schema<IUser>({
    name : {type : String, required : true, trim : true, min : 3 , max: 255},
    email : {type : String, required : true, validate: {
      validator: function(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: props => `${props.value} is not a valid phone number!`
    },
    unique : [true, "This email already exist"]
},
    phone : {type : String, required : [true, "Your Number is not valid"],
        unique : [true, "This phone already exist"]
    },
    password : {type : String, required : true},
    role : {
        type : String,
        enum : {
            values : ["Admin" , "Borrower"],
            message : `{VALUE} Is Not Supported`
        },
        required : true
    }
})

const User = model<IUser>("user", userSchema);
export default User;