import React from 'react';
import { getScreenTitle, getScreenDescription } from '../components/screens/utils';

interface StartViewProps {
  onStart: () => void;
  onAdmin: () => void;
}

const StartView: React.FC<StartViewProps> = ({ onStart, onAdmin }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-purple-900 flex flex-col items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 max-w-2xl w-full shadow-2xl">
        <h1 className="text-4xl font-bold text-center text-white mb-6">
          {getScreenTitle('start')}
        </h1>
        <p className="text-xl text-center text-blue-200 mb-8">
          {getScreenDescription('start')}
        </p>
        
        <div className="flex flex-col gap-4">
          <button
            onClick={onStart}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Start Game
          </button>
          
          <button
            onClick={onAdmin}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Admin Panel
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartView;