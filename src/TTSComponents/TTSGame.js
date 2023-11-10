import React, { useState } from 'react';
import './TTSGame.css';
import TTSQuestion from './TTSQuestion';


function TTSGame() {
    const [userAnswers, setUserAnswers] = useState({});
    const [isCorrect, setIsCorrect] = useState(false);
    const [isIncorrect, setIsIncorrect] = useState(false);
    const [showNotification, setShowNotification] = useState(false);

    const handleCheckAnswers = () => {
        const correctAnswers = {
        //baris pertama
        'd1 m1': 'R',
        'd1A': 'A',
        'd1B': 'C',
        'd1C': 'U',
        'd1D': 'N',
        //baris kedua
        'd2 m1': 'A',
        'd2A': 'N',
        'd2B': 'T',
        'd2C': 'I',
        'd2D': 'K',
        //baris ketiga
        'm1E': 'B',
        //baris keempat
        'm2C': 'K',
        'm1F': 'I',
        //baris kelima
        'm2D': 'A',
        'm1G': 'U',
        //baris keenam
        'm2E': 'T',
        'm1H': 'L',
        //baris ketujuh
        'd3 m3': 'Y',
        'd3 m2': 'E',
        'd3 m4': 'R',
        'd3D': 'U',
        'd3E': 'S',
        'd3 m1': 'A',
        'd3F': 'L',
        'd3G': 'E',
        'd3H': 'M',
        //baris kedelapan
        'm3B': 'A',
        'm4C': 'U',
        'm1D': 'W',
        //baris kesembilan
        'm3C': 'K',
        'd4 m4': 'S',
        'd4B': 'U',
        'd4C': 'L',
        'd4 m1': 'A',
        'd4E': 'W',
        'd4F': 'E',
        'd4G': 'S',
        'd4H': 'I',
        //baris kesepuluh
        'm3D': 'I',
        'm4A': 'I',
        'm1I': 'L',
        //baris sebelas
        'm3E': 'I',
        'm4B': 'A',
        };

        console.log(userAnswers);

        
        let isAllCorrect = true;

        for (const [key, value] of Object.entries(userAnswers)) {
            if (value.toUpperCase() !== correctAnswers[key]) {
                isAllCorrect = false;
                break;
            }
        }

        if (isAllCorrect) {
            setIsCorrect(true);
            setIsIncorrect(false);
        } else {
            setIsCorrect(false);
            setIsIncorrect(true);
        }
        setShowNotification(true);
    };
      
        const handleInputChange = (key, value) => {
            setUserAnswers((prevAnswers) => {
                const updatedAnswers = {
                    ...prevAnswers,
                    [key]: value.toUpperCase(),
                };
                console.log(updatedAnswers);
                return updatedAnswers;
            });
        };        
        
     
    return(
        <div className="tts-game">
            <h1 className="game-title"> GAME TEKA TEKI SILANG</h1>
            <div className="game-content">
                <div className="baris">
                    <div className="kolom">
                        <table className="tabel">
                            <tbody>
                                <tr>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['d1 m1'] === 'R' ? 'correct' : ''} ${isIncorrect && userAnswers['d1 m1'] !== 'R' ? 'incorrect' : ''}`}>
                                        <div className="tts-number-wrapper">
                                            <span className="nomorTTS atas">1</span>
                                            <input
                                                className="d1 m1"
                                                type="text"
                                                maxLength="1"
                                                value={userAnswers['d1 m1'] || ''}
                                                onChange={(e) => handleInputChange('d1 m1', e.target.value)}
                                                />
                                            <span className="nomorTTS samping">2</span>
                                        </div>
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d1A'] === 'A' ? 'correct' : ''} ${isIncorrect && userAnswers['d1A'] !== 'A' ? 'incorrect' : ''}`}>
                                    <input
                                        className="d1A"
                                        type="text"
                                        maxLength="1"
                                        value={userAnswers['d1A']}
                                        onChange={(e) => handleInputChange('d1A', e.target.value)}
                                    />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d1B'] === 'C' ? 'correct' : ''} ${isIncorrect && userAnswers['d1B'] !== 'C' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d1B"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d1B']}
                                            onChange={(e) => handleInputChange('d1B', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d1C'] === 'U' ? 'correct' : ''} ${isIncorrect && userAnswers['d1C'] !== 'U' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d1C"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d1C']}
                                            onChange={(e) => handleInputChange('d1C', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d1D'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d1D'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d1D"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d1D']}
                                            onChange={(e) => handleInputChange('d1D', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['d2 m1'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d2 m1'] !== 'N' ? 'incorrect' : ''}`}>
                                        <div className="tts-number-wrapper">
                                            <span className="nomorTTS atas">3</span>
                                            <input
                                                className="d2 m1"
                                                type="text"
                                                maxLength="1"
                                                value={userAnswers['d2 m1']}
                                                onChange={(e) => handleInputChange('d2 m1', e.target.value)}
                                            />
                                        </div>
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d2A'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d2A'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d2A"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d2A']}
                                            onChange={(e) => handleInputChange('d2A', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d2B'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d2B'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d2B"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d2B']}
                                            onChange={(e) => handleInputChange('d2B', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d2C'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d2C'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d2C"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d2C']}
                                            onChange={(e) => handleInputChange('d2C', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d2D'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d2D'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d2D"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d2D']}
                                            onChange={(e) => handleInputChange('d2D', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m1E'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m1E'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m1E"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m1E']}
                                            onChange={(e) => handleInputChange('m1E', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                </tr>
                                <tr>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m2C'] === 'R' ? 'correct' : ''} ${isIncorrect && userAnswers['m2C'] !== 'R' ? 'incorrect' : ''}`}>
                                        <div className="tts-number-wrapper">
                                            <span className="nomorTTS atas">4</span>
                                            <input
                                                className="m2C"
                                                type="text"
                                                maxLength="1"
                                                value={userAnswers['m2C'] || ''}
                                                onChange={(e) => handleInputChange('m2C', e.target.value)}
                                                />
                                        </div>
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m1F'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m1F'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m1F"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m1F']}
                                            onChange={(e) => handleInputChange('m1F', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                </tr>
                                <tr>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m2D'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m2D'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m2D"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m2D']}
                                            onChange={(e) => handleInputChange('m2D', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m1G'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m1G'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m1G"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m1G']}
                                            onChange={(e) => handleInputChange('m1G', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                </tr>
                                <tr>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m2E'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m2E'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m2E"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m2E']}
                                            onChange={(e) => handleInputChange('m2E', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m1H'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m1H'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m1H"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m1H']}
                                            onChange={(e) => handleInputChange('m1H', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                </tr>
                                <tr>
                                <td className={`block ${isCorrect && userAnswers['d3 m3'] === 'R' ? 'correct' : ''} ${isIncorrect && userAnswers['d3 m3'] !== 'R' ? 'incorrect' : ''}`}>
                                        <div className="tts-number-wrapper">
                                            <span className="nomorTTS atas">5</span>
                                            <input
                                                className="d3 m3"
                                                type="text"
                                                maxLength="1"
                                                value={userAnswers['d3 m3'] || ''}
                                                onChange={(e) => handleInputChange('d3 m3', e.target.value)}
                                                />
                                            <span className="nomorTTS samping">6</span>
                                        </div>
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d3 m2'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d3 m2'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d3 m2"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d3 m2']}
                                            onChange={(e) => handleInputChange('d3 m2', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d3 m4'] === 'R' ? 'correct' : ''} ${isIncorrect && userAnswers['d3 m4'] !== 'R' ? 'incorrect' : ''}`}>
                                        <div className="tts-number-wrapper">
                                            <span className="nomorTTS atas">7</span>
                                            <input
                                                className="d3 m4"
                                                type="text"
                                                maxLength="1"
                                                value={userAnswers['d3 m4'] || ''}
                                                onChange={(e) => handleInputChange('d3 m4', e.target.value)}
                                                />
                                        </div>
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d3D'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d3D'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d3D"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d3D']}
                                            onChange={(e) => handleInputChange('d3D', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d3E'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d3E'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d3E"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d3E']}
                                            onChange={(e) => handleInputChange('d3E', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d3 m1'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d3 m1'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d3 m1"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d3 m1']}
                                            onChange={(e) => handleInputChange('d3 m1', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d3F'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d3F'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d3F"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d3F']}
                                            onChange={(e) => handleInputChange('d3F', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d3G'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d3G'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d3G"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d3G']}
                                            onChange={(e) => handleInputChange('d3G', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d3H'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d3H'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d3H"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d3H']}
                                            onChange={(e) => handleInputChange('d3H', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`block ${isCorrect && userAnswers['m3B'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m3B'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m3Bd3E"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m3B']}
                                            onChange={(e) => handleInputChange('m3B', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m4C'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m4C'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d3m4CE"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m4C']}
                                            onChange={(e) => handleInputChange('m4C', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m1D'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m1D'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m1D"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m1D']}
                                            onChange={(e) => handleInputChange('m1D', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                </tr>
                                <tr>
                                    <td className={`block ${isCorrect && userAnswers['m3C'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m3C'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m3C"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m3C']}
                                            onChange={(e) => handleInputChange('m3C', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['d4 m4'] === 'R' ? 'correct' : ''} ${isIncorrect && userAnswers['d4 m4'] !== 'R' ? 'incorrect' : ''}`}>
                                        <div className="tts-number-wrapper">
                                            <span className="nomorTTS atas">8</span>
                                            <input
                                                className="d4 m4"
                                                type="text"
                                                maxLength="1"
                                                value={userAnswers['d4 m4'] || ''}
                                                onChange={(e) => handleInputChange('d3 m4', e.target.value)}
                                                />
                                        </div>
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d4B'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d4B'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d4B"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d4B']}
                                            onChange={(e) => handleInputChange('d4B', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d4C'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d4C'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d4C"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d4C']}
                                            onChange={(e) => handleInputChange('d4C', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d4 m1'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d4 m1'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d4 m1"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d4 m1']}
                                            onChange={(e) => handleInputChange('d4 m1', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d4E'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d4E'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d4E"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d4E']}
                                            onChange={(e) => handleInputChange('d4E', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d4F'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d4F'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d4F"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d4F']}
                                            onChange={(e) => handleInputChange('d4F', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d4G'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d4G'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d4G"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d4G']}
                                            onChange={(e) => handleInputChange('d4G', e.target.value)}
                                        />
                                    </td>
                                    <td className={`block ${isCorrect && userAnswers['d4H'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['d4H'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="d4H"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['d4H']}
                                            onChange={(e) => handleInputChange('d4H', e.target.value)}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className={`block ${isCorrect && userAnswers['m3D'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m3D'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m3D"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m3D']}
                                            onChange={(e) => handleInputChange('m3D', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m4A'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m4A'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m4A"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m4A']}
                                            onChange={(e) => handleInputChange('m4A', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m1I'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m1I'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m1I"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m1I']}
                                            onChange={(e) => handleInputChange('m1I', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                </tr>
                                <tr>
                                    <td className={`block ${isCorrect && userAnswers['m3E'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m3E'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m3E"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m3E']}
                                            onChange={(e) => handleInputChange('m3E', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className={`block ${isCorrect && userAnswers['m4B'] === 'N' ? 'correct' : ''} ${isIncorrect && userAnswers['m4B'] !== 'N' ? 'incorrect' : ''}`}>
                                        <input
                                            className="m4B"
                                            type="text"
                                            maxLength="1"
                                            value={userAnswers['m4B']}
                                            onChange={(e) => handleInputChange('m4B', e.target.value)}
                                        />
                                    </td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>
                                    <td className="block"></td>      
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> 
                <div className="pertanyaan">
                    <h4>Mendatar</h4>
                    <TTSQuestion question="2. Zat yang menyebabkan sakit atau mati" name="soal1d"/>
                    <TTSQuestion question="3. Kuno tapi bernilai" name="soal2d"/>
                    <TTSQuestion question="6. Ibu kota Palestina" name="soal3d"/>
                    <TTSQuestion question="8. Pulau disebelah timur Kalimantan" name="soal4d" />
                </div>
                <div className="Pertanyaan">
                    <h4>Menurun</h4>
                    <TTSQuestion question="1. Bulan kelahiran Nabi Muhammad" name="soal1m"/>
                    <TTSQuestion question="4. Jenis ayam yang bertumbuh kecil" name="soal2m"/>
                    <TTSQuestion question="5. Percaya dengan sungguh-sungguh" name="soal3m"/>
                    <TTSQuestion question="7. Negara terbesar di dunia" name="soal4m"/>
                </div>
            </div>
            <button onClick={handleCheckAnswers}>Periksa Jawaban</button>
            {showNotification && (
                <div className={`notification ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? 'Jawaban benar!' : 'Jawaban salah. Silakan coba lagi.'}
                </div>
            )}
        </div>
        
    );
}

export default TTSGame;