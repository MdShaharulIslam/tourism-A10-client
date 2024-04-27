import Swal from "sweetalert2";
import Navber from "../Navber/Navber";


const AddTouristSpot = () => {
    const handleAddCoffee= e =>{
        e.preventDefault();
        const form =e.target;
        const spotName = form.spotName.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const countryName = form.countryName.value;
        const seassonality = form.seassonality.value;
        const location = form.location.value;
        const discription = form.discription.value;
        const avarageCost = form.avarageCost.value;
         const travelTime = form.travelTime.value;
        const totalVisitorPerYear = form.totalVisitorPerYear.value;
        const photoUrl = form.photoUrl.value;
const tourism = {userName,email,spotName,countryName,seassonality,location,discription,avarageCost,travelTime,totalVisitorPerYear,photoUrl}
        console.log(tourism);
// send data to the server site
fetch('http://localhost:5000/tourism', {
    method:'POST', 
    headers: {
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify(tourism)
})
.then(res => res.json())
.then(data => {
    console.log(data);
});
Swal.fire({
    title: 'success',
    text: 'Do you want to continue',
    icon: 'success',
    confirmButtonText: 'Cool'
  })

    }
    return (
        <div>
             <div className="mx-8">
                <Navber></Navber>
            </div>
            <div className="p-10">
            <form onSubmit={handleAddCoffee} className="bg-[#FFFF] shadow-lg rounded-lg mt-8 p-4">
                <h1 className="font-bold text-4xl text-center ">Add Spot where you visit</h1>
                <div className="md:flex gap-6  ">
                    <div className="md:w-1/2 p-4">
                        <label className="label">
                            <span className="font-bold">User Name</span>
                        </label>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full" name="userName" placeholder="Your Name" type="text" required />
                        </div>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <label className="label">
                            <span className="font-bold">User Email</span>
                        </label>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full" name="email" placeholder="email" type="email" required />
                        </div>
                    </div>

                </div>
                <div className="md:flex gap-6  ">
                    <div className="md:w-1/2 p-4">
                        <label className="label">
                            <span className="font-bold">Spot Name</span>
                        </label>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full" name="spotName" placeholder="spot Name" type="text" required />
                        </div>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <label className="label">
                            <span className="font-bold">Country Name</span>
                        </label>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full" name="countryName" placeholder="country name" type="number" required />
                        </div>
                    </div>

                </div>
                {/* form supply */}
                <div className="md:flex gap-6  ">
                    <div className="md:w-1/2 p-4">
                        <label className="label">
                            <span className="font-bold">Location</span>
                        </label>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full" name="location" placeholder="location" type="text" required />
                        </div>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <label className="label">
                            <span className="font-bold">short description</span>
                        </label>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full" name="discription" placeholder="discription" type="text" required />
                        </div>
                    </div>

                </div>
                {/* form Category */}
                <div className="md:flex gap-6  ">
                    <div className="md:w-1/2 p-4">
                        <label className="label">
                            <span className="font-bold">Avarage Cost</span>
                        </label>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full" name="avarageCost" placeholder="avarageCost" type="text" required />
                        </div>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <label className="label">
                            <span className="font-bold">Seassonality</span>
                        </label>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full" name="seassonality" placeholder="seassonality" type="text" required />
                        </div>
                    </div>
                </div>
                <div className="md:flex gap-6  ">
                    <div className="md:w-1/2 p-4">
                        <label className="label">
                            <span className="font-bold">Travel_time</span>
                        </label>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full" name="travelTime" placeholder="travelTime" type="text" required />
                        </div>
                    </div>
                    <div className="md:w-1/2 p-4">
                        <label className="label">
                            <span className="font-bold">TotalVisitorPerYear</span>
                        </label>
                        <div className="join w-full">
                            <input className="input input-bordered join-item w-full" name="totalVisitorPerYear" placeholder="totalVisitorPerYear" type="text" required />
                        </div>
                    </div>
                </div>
                <div className="w-full p-4"> <label className="label">
                            <span className="font-bold">PhotoUrl</span>
                        </label>
                    <input className="input input-bordered join-item w-full mb-4" name="photoUrl" placeholder="Photo Url" type="text" />
                    <input type="submit" value="Add Coffee" className="btn bg-[#00ffa6] w-full" /></div>

            </form>
        </div>
        </div>
    );
};

export default AddTouristSpot;