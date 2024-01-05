import React from 'react'
import CustomInput from '../components/CustomInput';

const Resetpassword = () => {
  return (
    <div className="py-5" style={{ background: "#a74d9d", minHeight: "100vh",  }}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className= "my-5 w-25 bg-white rounded-3 max-auto p-4">
            <h3 className='text-center title'>Reset password</h3>
            <p className='text-center'
            >New password</p>
            <form action="">
            <CustomInput type="password" label="New password" id="pass"  />
            <CustomInput type="password" label="Confirm password" id="confirmpass"  />

            <button className='border-0 px-3 py-2 text-white fw-bold w-100'
             style={{background:"#a74d9d"}}
             type='submit'
             >
                Reset password
             </button>
            </form>
        </div>
    </div>
  );
};

export default Resetpassword;  