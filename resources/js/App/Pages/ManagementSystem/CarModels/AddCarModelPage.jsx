import React, {useContext, useEffect} from 'react'

import { CarModelContext } from '../../../Context/CarModelContext';
import Spinner from '../../../MainComponents/Spinner';
import { GeneralContext } from '../../../Context/GeneralContext';
import DropdownSingleSearchList from '../../../MainComponents/DropdownSingleSearchList';


const AddCarModelPage = () => {
  const { loading, addCarModel, errors, setInput, inputsState, resetAllInputs, resetAllErrors, } = useContext(CarModelContext);
  const { getContent, content } = useContext(GeneralContext);
  // const { getAllDepartments, departments } = useContext(DepartmentsContext);
  
  useEffect(async () => {
    await resetAllInputs();
    await resetAllErrors();
    await getAllDepartments();
    await getContent();
  }, []);

  const years = [];
  for (let i = 19970; i<=Number(new Date().getFullYear()) ; i++) {
    years.push(i);
  }

  async function addHandler(e) {
    let formData = new FormData();
    formData.append("car_manufacture", inputsState.car_manufacture);
    formData.append("car_year", inputsState.car_year);
    formData.append("model_name", inputsState.model_name);
    formData.append("image", inputsState.image);
    await addCarModel(formData);    
  };


  return (<>
    <section className="w-11/12 mx-auto my-5">
      {loading && (
        <div className="flex flex-col justify-center items-center h-screen">
          <Spinner />
        </div>
      )}
{/* 
      {!loading && departments.length<1 && (
        <div className="flex flex-col justify-center items-center h-screen">
          <h1 className="text-center font-extrabold text-2xl">{`There's no departments available`}</h1>
        </div>
      )} */}

      {(!loading && content &&  inputsState) ? (<>
        <div className="flex flex-col w-8/12 mx-auto rounded items-center bg-white">
          <h1 className="bg-blue-light p-3 w-9/12 rounded text-white z-10 -mt-5 md:text-2xl text-base">Add CarModel</h1>
          <form onSubmit={(e)=>addHandler(e)} className="my-8 space-y-6 w-8/12" encType="multipart/form-data">            
            <input type="hidden" name="_method" value="POST" />
            <input type="hidden" name="remember" defaultValue="true" />

            {/* Car Manufacture   */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mt-4">
                <label htmlFor="car_manufacture" className="capitalize md:text-lg text-xs">
                  Car Manufacture <span className='text-red-common'>*</span>:
                </label>
                <input onChange={(e)=>setInput(e)} value={inputsState.car_manufacture  ? inputsState.car_manufacture : "" } 
                  id={`car_manufacture`} name="car_manufacture" type="" placeholder="Enter The Car Manufacture" 
                  className=" bg-blue-thin relative block w-full p-3 border md:text-lg text-xs placeholder-gray-common text-blue-dark rounded-t-md rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                />
                {errors && (<span className="text-red-common p-3">{errors.car_manufacture}</span>)}
              </div>
            </div>

            {/* Car Year   */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mt-4">
                <label htmlFor="car_year" className="capitalize md:text-lg text-xs">
                  Car Year <span className='text-red-common'>*</span>:
                </label>
                <DropdownSingleSearchList defaultArray={inputsState.car_year ? [inputsState.car_year] : []} name='car_year' array={years} setInput={setInput} />
                {errors && (<span className="text-red-common p-3">{errors.car_year}</span>)}
              </div>
            </div>

            {/* Model Name   */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mt-4">
                <label htmlFor="model_name" className="capitalize md:text-lg text-xs">
                  Car Year <span className='text-red-common'>*</span>:
                </label>
                <input onChange={(e)=>setInput(e)} value={inputsState.model_name  ? inputsState.model_name : "" } 
                  id={`model_name`} name="model_name" type="text" placeholder="Enter The Car Manufacture" 
                  className=" bg-blue-thin relative block w-full p-3 border md:text-lg text-xs placeholder-gray-common text-blue-dark rounded-t-md rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                />
                {errors && (<span className="text-red-common p-3">{errors.model_name}</span>)}
              </div>
            </div>

            {/* image   */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mt-4">
                <label htmlFor="image" className="capitalize md:text-lg text-xs">
                  Upload Your Image : 
                </label>
                <input id={`image`} onChange={(e)=>setInput(e)} 
                  name="image" type="file" placeholder="Upload Image" 
                  className=" bg-blue-thin relative block w-full p-3 border md:text-lg text-xs placeholder-gray-common text-blue-dark rounded-t-md rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10"
                />
                {errors && (<span className="text-red-common p-3">{errors.image}</span>)}
              </div>
            </div>

            {/* Submit  */}
            <div>
              <button type="submit" className="group btn-outline relative w-full flex justify-center py-3 px-4 md:text-xl text-xs text-blue-dark font-medium rounded-md border-blue-dark border-2 hover:bg-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Add CarModel
              </button>
            </div>
          </form> 
        </div>
      </>) : null}
    </section>
  </>);
}


export default AddCarModelPage
