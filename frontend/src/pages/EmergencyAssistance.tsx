import React from 'react';
import { Phone, Ambulance, ChevronFirst as FirstAid } from 'lucide-react';

const EmergencyAssistance = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-600 mb-8">Emergency Assistance</h1>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Phone className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-xl font-semibold">Emergency Contacts</h2>
          </div>
          <div className="space-y-3">
            <p className="text-2xl font-bold text-red-600">911</p>
            <p className="text-gray-600">For immediate emergency response</p>
            <div className="border-t pt-3">
              <p className="font-semibold">Poison Control: 1-800-222-1222</p>
              <p className="font-semibold">Crisis Helpline: 988</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Ambulance className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-xl font-semibold">Nearest Emergency Rooms</h2>
          </div>
          <div className="space-y-4">
            <button className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition">
              Find Nearest ER
            </button>
            <p className="text-sm text-gray-600">
              Click to locate the closest emergency rooms to your current location
            </p>
          </div>
        </div>

        <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <FirstAid className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-xl font-semibold">First Aid Guidelines</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold">Common Emergencies</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Heart Attack Symptoms</li>
                <li>Stroke Recognition</li>
                <li>Severe Bleeding</li>
                <li>Allergic Reactions</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Basic First Aid</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>CPR Steps</li>
                <li>Heimlich Maneuver</li>
                <li>Burn Treatment</li>
                <li>Wound Care</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyAssistance;