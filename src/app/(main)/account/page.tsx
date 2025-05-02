"use client"

import { useAuth, UserData } from "@/context/AuthContext";
import { useState, useEffect } from "react";

const UserProfilePage: React.FC = () => {
  const { user } = useAuth()

  const userDefault = {
    id: 0,
    username: "",
    name: "",
    birthdate: "",
    address: "",
    profession: "",
    religion: "",
    avatar: ""
  }

  const [userData, setUserData] = useState<UserData>(user || userDefault);

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      console.log("Saving user data:", userData);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
      setIsEditing(false);
    } catch (err) {
      setError("Failed to save changes");
    }
  };

  useEffect(()=>{
    setUserData(user || userDefault)
  }, [user])

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
  };

  if (loading) return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
    </div>
  );

  if (error) return (
    <div className="text-center p-5 text-red-500">
      <i className="bi bi-exclamation-triangle text-3xl mb-2"></i>
      <p>{error}</p>
    </div>
  );

  return (
    <main className="flex-grow p-5 overflow-y-auto">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl font-semibold">Profile</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-teal-500 to-teal-700 text-white px-4 py-2 rounded-lg hover:opacity-90 transition"
          >
            <i className="bi bi-pencil-fill"></i>
            Edit Profile
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(false)}
            className="flex items-center gap-2 border border-teal-500 text-teal-500 px-4 py-2 rounded-lg hover:bg-teal-50 transition"
          >
            <i className="bi bi-x-lg"></i>
            Cancel
          </button>
        )}
      </div>

      {saveSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-5 flex justify-between items-center">
          <span>Profile updated successfully!</span>
          <button onClick={() => setSaveSuccess(false)} className="text-green-700">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
      )}

      <div className="bg-white rounded-xl shadow-sm p-5 mb-5">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden">
              {userData.avatar ? (
                <img src={userData.avatar} alt={userData.name} className="w-full h-full object-cover" />
              ) : (
                <i className="bi bi-person-fill text-teal-500 text-4xl"></i>
              )}
            </div>
            {isEditing && (
              <div className="absolute bottom-0 right-0 bg-teal-500 text-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer">
                <i className="bi bi-camera-fill"></i>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-xl font-medium">{userData.name}</h3>
            <p className="text-gray-600">{userData.profession}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input
                type="text"
                name="username"
                value={userData.username}
                disabled
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-sm bg-gray-100 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500 mt-1">Username cannot be changed</p>
            </div>

            {/* <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value="********"
                disabled
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg text-sm bg-gray-100 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500 mt-1">Contact admin to reset password</p>
            </div> */}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 border-2 rounded-lg text-sm ${isEditing
                  ? 'border-teal-300 focus:outline-none focus:border-teal-500'
                  : 'border-gray-200 bg-gray-50'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <input
                type="date"
                name="birthdate"
                value={formatDate(userData.birthdate)}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 border-2 rounded-lg text-sm ${isEditing
                  ? 'border-teal-300 focus:outline-none focus:border-teal-500'
                  : 'border-gray-200 bg-gray-50'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Profession</label>
              <input
                type="text"
                name="profession"
                value={userData.profession}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 border-2 rounded-lg text-sm ${isEditing
                  ? 'border-teal-300 focus:outline-none focus:border-teal-500'
                  : 'border-gray-200 bg-gray-50'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Religion</label>
              <select
                name="religion"
                value={userData.religion}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-full px-4 py-2 border-2 rounded-lg text-sm ${isEditing
                  ? 'border-teal-300 focus:outline-none focus:border-teal-500'
                  : 'border-gray-200 bg-gray-50'}`}
              >
                <option value="Islam">Islam</option>
                <option value="Christianity">Christianity</option>
                <option value="Hinduism">Hinduism</option>
                <option value="Buddhism">Buddhism</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea
              name="address"
              value={userData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
              rows={3}
              className={`w-full px-4 py-2 border-2 rounded-lg text-sm ${isEditing
                ? 'border-teal-300 focus:outline-none focus:border-teal-500'
                : 'border-gray-200 bg-gray-50'}`}
            />
          </div>

          {isEditing && (
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-gradient-to-r from-teal-500 to-teal-700 text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
              >
                Save Changes
              </button>
            </div>
          )}
        </form>
      </div>
    </main>
  );
};

export default UserProfilePage;