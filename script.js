// 字母数据
const alphabetData = {
    A: { 
        phonetic: '/eɪ/',
        sound: '/æ/',
        words: [
            { word: 'Apple', emoji: '🍎', audio: 'apple' }, 
            { word: 'Ant', emoji: '🐜', audio: 'ant' }, 
            { word: 'Arm', emoji: '💪', audio: 'arm' }
        ],
        practiceText: 'Aa says /æ/，Aa says /æ/ ， apple apple /æ/ /æ/ /æ/'
    },
    B: { 
        phonetic: '/biː/',
        sound: '/b/',
        words: [
            { word: 'Bear', emoji: '🐻', audio: 'bear' }, 
            { word: 'Black', emoji: '⚫', audio: 'black' }, 
            { word: 'Book', emoji: '📚', audio: 'book' }
        ],
        practiceText: 'Bb says /b/，Bb says /b/，bear bear /b/ /b/ /b/. Bb says /b/，Bb says /b/，black black /b/ /b/ /b/'
    },
    C: { 
        phonetic: '/siː/',
        sound: '/k/',
        words: [
            { word: 'Cat', emoji: '🐱', audio: 'cat' }, 
            { word: 'Cookie', emoji: '🍪', audio: 'cookie' }, 
            { word: 'Cake', emoji: '🎂', audio: 'cake' }
        ],
        practiceText: 'Cc says /k/，Cc says /k/ ， cat cat /k/ /k/ /k/. Cc says /k/，Cc says /k/ ， cookie cookie /k/ /k/ /k/'
    },
    D: { 
        phonetic: '/diː/',
        sound: '/d/',
        words: [
            { word: 'Dog', emoji: '🐶', audio: 'dog' }, 
            { word: 'Deer', emoji: '🦌', audio: 'deer' }, 
            { word: 'Door', emoji: '🚪', audio: 'door' }
        ],
        practiceText: 'Dd says /d/，Dd says /d/，dog dog /d/ /d/ /d/. Dd says /d/，Dd says /d/，deer deer /d/ /d/ /d/'
    },
    E: { 
        phonetic: '/iː/',
        sound: '/e/',
        words: [
            { word: 'Elephant', emoji: '🐘', audio: 'elephant' }, 
            { word: 'Elbow', emoji: '💪', audio: 'elbow' }, 
            { word: 'Ear', emoji: '👂', audio: 'ear' }
        ],
        practiceText: 'E e says /e/， E e says /e/ ， elephant elephant /e/ /e/ /e/. E e says /e/，E e says /e/ ， elbow elbow /e/ /e/ /e/'
    },
    F: { 
        phonetic: '/ef/',
        sound: '/f/',
        words: [
            { word: 'Fish', emoji: '🐟', audio: 'fish' }, 
            { word: 'Flag', emoji: '🏳️', audio: 'flag' }, 
            { word: 'Fire', emoji: '🔥', audio: 'fire' }
        ],
        practiceText: 'F f says /f/，F f says /f/，fish fish /f/ /f/ /f/. F f says /f/， F f says /f/，flag flag /f/ /f/ /f/'
    },
    G: { 
        phonetic: '/dʒiː/',
        sound: '/g/',
        words: [
            { word: 'Goose', emoji: '🪿', audio: 'goose' }, 
            { word: 'Glasses', emoji: '👓', audio: 'glasses' }, 
            { word: 'Gift', emoji: '🎁', audio: 'gift' }
        ],
        practiceText: 'G g says /g/，G g says /g/，goose goose /g/ /g/ /g/. G g says /g/，G g says /g/，glasses glasses /g/ /g/ /g/'
    },
    H: { 
        phonetic: '/eɪtʃ/',
        sound: '/h/',
        words: [
            { word: 'Hammer', emoji: '🔨', audio: 'hammer' }, 
            { word: 'Hair', emoji: '💇', audio: 'hair' }, 
            { word: 'House', emoji: '🏠', audio: 'house' }
        ],
        practiceText: 'H h says /h/，H h says /h/ , hammer hammer /h/ /h/ /h/. H h says /h/，H h says /h/ , hair hair /h/ /h/ /h/'
    },
    I: { 
        phonetic: '/aɪ/',
        sound: '/ɪ/',
        words: [
            { word: 'Iguana', emoji: '🦎', audio: 'iguana' }, 
            { word: 'Ink', emoji: '🖋️', audio: 'ink' }, 
            { word: 'Ice', emoji: '🧊', audio: 'ice' }
        ],
        practiceText: 'I i says /ɪ/，I i says /ɪ/，iguana iguana /ɪ/ /ɪ/ /ɪ/. I i says /ɪ/，I i says /ɪ/，ink ink /ɪ/ /ɪ/ /ɪ/'
    },
    J: { 
        phonetic: '/dʒeɪ/',
        sound: '/dʒ/',
        words: [
            { word: 'Jacket', emoji: '🧥', audio: 'jacket' }, 
            { word: 'Jellyfish', emoji: '🪼', audio: 'jellyfish' }, 
            { word: 'Jar', emoji: '🏺', audio: 'jar' }
        ],
        practiceText: 'Jj says /dʒ/，Jj says /dʒ/，jellyfish jellyfish /dʒ/ /dʒ/ /dʒ/. Jj says /dʒ/，Jj says /dʒ/，jacket jacket /dʒ/ /dʒ/ /dʒ/'
    },
    K: { 
        phonetic: '/keɪ/',
        sound: '/k/',
        words: [
            { word: 'Koala', emoji: '🐨', audio: 'koala' }, 
            { word: 'Kangaroo', emoji: '🦘', audio: 'kangaroo' }, 
            { word: 'King', emoji: '👑', audio: 'king' }
        ],
        practiceText: 'K k says /k/，K k says /k/ , kangaroo kangaroo /k/ /k/ /k/. K k says /k/，K k says /k/ , koala koala /k/ /k/ /k/'
    },
    L: { 
        phonetic: '/el/',
        sound: '/l/',
        words: [
            { word: 'Lion', emoji: '🦁', audio: 'lion' }, 
            { word: 'Leopard', emoji: '🐆', audio: 'leopard' }, 
            { word: 'Light', emoji: '💡', audio: 'light' }
        ],
        practiceText: 'L l says /l/，L l says /l/，lion lion /l/ /l/ /l/. L l says /l/，L l says /l/，leopard leopard /l/ /l/ /l/'
    },
    M: { 
        phonetic: '/em/',
        sound: '/m/',
        words: [
            { word: 'Monkey', emoji: '🐵', audio: 'monkey' }, 
            { word: 'Map', emoji: '🗺️', audio: 'map' }, 
            { word: 'Milk', emoji: '🥛', audio: 'milk' }
        ],
        practiceText: 'M m says /m/，M m says /m/，monkey monkey, /m/ /m/ /m/. M m says /m/，M m says /m/，map map, /m/ /m/ /m/'
    },
    N: { 
        phonetic: '/en/',
        sound: '/n/',
        words: [
            { word: 'Nurse', emoji: '👩‍⚕️', audio: 'nurse' }, 
            { word: 'Necklace', emoji: '📿', audio: 'necklace' }, 
            { word: 'Net', emoji: '🥅', audio: 'net' }
        ],
        practiceText: 'N n says /n/，N n says /n/，nurse nurse , /n/ /n/ /n/'
    },
    O: { 
        phonetic: '/oʊ/',
        sound: '/ɒ/',
        words: [
            { word: 'Octopus', emoji: '🐙', audio: 'octopus' }, 
            { word: 'Owl', emoji: '🦉', audio: 'owl' }, 
            { word: 'Ocean', emoji: '🌊', audio: 'ocean' }
        ],
        practiceText: 'O o says /ɒ/，O o says /ɒ/，octopus octopus, /ɒ/ /ɒ/ /ɒ/'
    },
    P: { 
        phonetic: '/piː/',
        sound: '/p/',
        words: [
            { word: 'Panda', emoji: '🐼', audio: 'panda' }, 
            { word: 'Pizza', emoji: '🍕', audio: 'pizza' }, 
            { word: 'Pen', emoji: '✏️', audio: 'pen' }
        ],
        practiceText: 'P p says /p/，P p says /p/，panda panda , /p/ /p/ /p/'
    },
    Q: { 
        phonetic: '/kjuː/',
        sound: '/kw/',
        words: [
            { word: 'Queen', emoji: '👸', audio: 'queen' }, 
            { word: 'Quarrel', emoji: '🗯️', audio: 'quarrel' }, 
            { word: 'Quiet', emoji: '🤫', audio: 'quiet' }
        ],
        practiceText: 'qu says /kw/, qu says /kw/，queen queen , /kw/ /kw/ /kw/'
    },
    R: { 
        phonetic: '/ɑːr/',
        sound: '/r/',
        words: [
            { word: 'Rabbit', emoji: '🐰', audio: 'rabbit' }, 
            { word: 'Rice', emoji: '🍚', audio: 'rice' }, 
            { word: 'Rose', emoji: '🌹', audio: 'rose' }
        ],
        practiceText: 'R r says /r/，R r says /r/，rabbit rabbit, /r/ /r/ /r/'
    },
    S: { 
        phonetic: '/es/',
        sound: '/s/',
        words: [
            { word: 'Swan', emoji: '🦢', audio: 'swan' }, 
            { word: 'Star', emoji: '⭐', audio: 'star' }, 
            { word: 'Snake', emoji: '🐍', audio: 'snake' }
        ],
        practiceText: 'S s says /s/，S s says /s/，swan swan , /s/ /s/ /s/'
    },
    T: { 
        phonetic: '/tiː/',
        sound: '/t/',
        words: [
            { word: 'Turtle', emoji: '🐢', audio: 'turtle' }, 
            { word: 'Towel', emoji: '🏖️', audio: 'towel' }, 
            { word: 'Toy', emoji: '🧸', audio: 'toy' }
        ],
        practiceText: 'T t says /t/，T t says /t/，turtle turtle , /t/ /t/ /t/'
    },
    U: { 
        phonetic: '/juː/',
        sound: '/ʌ/',
        words: [
            { word: 'Umbrella', emoji: '☂️', audio: 'umbrella' }, 
            { word: 'Uniform', emoji: '👔', audio: 'uniform' }, 
            { word: 'Under', emoji: '⬇️', audio: 'under' }
        ],
        practiceText: 'U u says /ʌ/，U u says /ʌ/，umbrella umbrella, /ʌ/ /ʌ/ /ʌ/'
    },
    V: { 
        phonetic: '/viː/',
        sound: '/v/',
        words: [
            { word: 'Violin', emoji: '🎻', audio: 'violin' }, 
            { word: 'Vegetable', emoji: '🥬', audio: 'vegetable' }, 
            { word: 'Vase', emoji: '🏺', audio: 'vase' }
        ],
        practiceText: 'V v says /v/，V v says /v/，violin violin , /v/ /v/ /v/'
    },
    W: { 
        phonetic: '/ˈdʌbəl juː/',
        sound: '/w/',
        words: [
            { word: 'Water', emoji: '💧', audio: 'water' }, 
            { word: 'Whale', emoji: '🐋', audio: 'whale' }, 
            { word: 'Wind', emoji: '💨', audio: 'wind' }
        ],
        practiceText: 'W w says /w/，W w says /w/，water water , /w/ /w/ /w/'
    },
    X: { 
        phonetic: '/eks/',
        sound: '/ks/',
        words: [
            { word: 'Xray', emoji: '🩻', audio: 'xray' }, 
            { word: 'Xmas', emoji: '🎄', audio: 'xmas' }, 
            { word: 'Box', emoji: '📦', audio: 'box' }
        ],
        practiceText: 'X x says /ks/，X x says /ks/，box box , /ks/ /ks/ /ks/'
    },
    Y: { 
        phonetic: '/waɪ/',
        sound: '/j/',
        words: [
            { word: 'Yellow', emoji: '💛', audio: 'yellow' }, 
            { word: 'Yo-yo', emoji: '🪀', audio: 'yoyo' }, 
            { word: 'Yard', emoji: '🏡', audio: 'yard' }
        ],
        practiceText: 'Y y says /j/，Y y says /j/，yellow yellow , /j/ /j/ /j/'
    },
    Z: { 
        phonetic: '/ziː/',
        sound: '/z/',
        words: [
            { word: 'Zebra', emoji: '🦓', audio: 'zebra' }, 
            { word: 'Zoo', emoji: '🦁', audio: 'zoo' }, 
            { word: 'Zero', emoji: '0️⃣', audio: 'zero' }
        ],
        practiceText: 'Z z says /z/，Z z says /z/，zebra zebra , /z/ /z/ /z/'
    }
};

// 全局变量
let completedLetters = new Set();
let currentLetter = '';
let stars = 0;
let currentGame = '';
let gameData = {};

// DOM元素
const alphabetGrid = document.getElementById('alphabetGrid');
const letterDetail = document.getElementById('letterDetail');
const gamesSection = document.getElementById('gamesSection');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const starCount = document.getElementById('starCount');
const audioPlayer = document.getElementById('audioPlayer');
const successPopup = document.getElementById('successPopup');

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadProgress();
});

// 初始化应用
function initializeApp() {
    renderAlphabetGrid();
    updateProgress();
}

// 渲染字母网格
function renderAlphabetGrid() {
    alphabetGrid.innerHTML = '';
    
    for (let i = 0; i < 26; i++) {
        const letter = String.fromCharCode(65 + i);
        const letterCard = document.createElement('div');
        letterCard.className = `letter-card ${completedLetters.has(letter) ? 'completed' : ''}`;
        letterCard.innerHTML = `
            <div class="letter-text">${letter}</div>
            <div class="letter-status">${completedLetters.has(letter) ? '已完成' : '点击学习'}</div>
        `;
        letterCard.addEventListener('click', () => showLetterDetail(letter));
        alphabetGrid.appendChild(letterCard);
    }
}

// 显示字母详情
function showLetterDetail(letter) {
    currentLetter = letter;
    const letterData = alphabetData[letter];
    
    // 更新字母显示
    document.getElementById('bigLetter').textContent = letter;
    
    // 设置字母播放按钮的点击事件
    const letterPlayBtn = document.getElementById('letterPlayBtn');
    letterPlayBtn.onclick = () => playLetterAudio(letter);
    
    // 添加音标练习区域
    const letterDisplay = document.querySelector('.letter-display');
    
    // 移除之前的音标区域（如果存在）
    const existingPhonetics = letterDisplay.querySelector('.phonetics-section');
    if (existingPhonetics) {
        existingPhonetics.remove();
    }
    
    // 创建音标练习区域
    const phoneticsSection = document.createElement('div');
    phoneticsSection.className = 'phonetics-section';
    phoneticsSection.innerHTML = `
        <div class="phonetic-practice">
            <div class="practice-text">${letterData.practiceText}</div>
            <button class="practice-btn" onclick="playPracticeAudio('${letter}')">🔊 播放发音练习</button>
        </div>
    `;
    
    // 在播放按钮之前插入音标区域
    const playBtn = letterDisplay.querySelector('.play-btn');
    letterDisplay.insertBefore(phoneticsSection, playBtn);
    
    // 渲染单词卡片
    const wordsGrid = document.getElementById('wordsGrid');
    wordsGrid.innerHTML = '';
    
    letterData.words.forEach(wordData => {
        const wordCard = document.createElement('div');
        wordCard.className = 'word-card';
        wordCard.innerHTML = `
            <div class="word-image">${wordData.emoji}</div>
            <div class="word-text">${wordData.word}</div>
            <button class="word-play-btn" onclick="playWordAudio('${wordData.word}')">🔊 播放</button>
        `;
        wordsGrid.appendChild(wordCard);
    });
    
    // 显示字母详情页面
    alphabetGrid.style.display = 'none';
    letterDetail.style.display = 'block';
    gamesSection.style.display = 'none';
}

// 播放音频
function playAudio(text) {
    // 使用Web Speech API进行语音合成
    if ('speechSynthesis' in window) {
        try {
            // 停止之前的语音
            speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = 'en-US';
            utterance.rate = 0.8;
            utterance.pitch = 1.2;
            
            // 添加错误处理
            utterance.onerror = function(event) {
                console.warn('Speech synthesis error:', event.error);
            };
            
            // 确保语音合成器已准备好
            if (speechSynthesis.paused) {
                speechSynthesis.resume();
            }
            
            speechSynthesis.speak(utterance);
        } catch (error) {
            console.warn('Failed to play audio:', error);
        }
    } else {
        console.warn('Speech synthesis not supported in this browser');
    }
}

// 播放字母音频
function playLetterAudio(letter) {
    playAudio(letter);
}

// 播放单词音频
function playWordAudio(word) {
    playAudio(word);
}

// 播放音标音频
function playPhoneticAudio(letter, type) {
    const letterData = alphabetData[letter];
    if (type === 'name') {
        // 播放字母名称
        playAudio(`${letter} says ${letterData.phonetic}`);
    } else if (type === 'sound') {
        // 播放字母发音
        playAudio(`${letter} says ${letterData.sound}`);
    }
}

// 播放发音练习音频
function playPracticeAudio(letter) {
    const letterData = alphabetData[letter];
    if (letterData.practiceText) {
        playAudio(letterData.practiceText);
    }
}

// 开始音标练习
function startPhoneticPractice(letter) {
    const letterData = alphabetData[letter];
    
    // 创建音标练习序列
    const practiceSequence = [
        `${letter} says ${letterData.sound}`,
        `${letter} says ${letterData.sound}`,
        `${letterData.words[0].word} ${letterData.words[0].word} ${letterData.sound} ${letterData.sound} ${letterData.sound}`,
        `${letter} says ${letterData.sound}`,
        `${letter} says ${letterData.sound}`,
        `${letterData.words[1].word} ${letterData.words[1].word} ${letterData.sound} ${letterData.sound} ${letterData.sound}`
    ];
    
    // 显示练习提示
    showPracticePopup(letter, practiceSequence);
}

// 显示音标练习弹窗
function showPracticePopup(letter, sequence) {
    // 创建练习弹窗
    const popup = document.createElement('div');
    popup.className = 'practice-popup';
    popup.innerHTML = `
        <div class="practice-content">
            <h3>🎯 ${letter} 音标练习</h3>
            <div class="practice-text" id="practiceText">准备开始...</div>
            <div class="practice-controls">
                <button class="practice-control-btn" onclick="startPracticeSequence()">▶️ 开始</button>
                <button class="practice-control-btn" onclick="closePracticePopup()">❌ 关闭</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // 保存练习数据到全局变量
    window.currentPracticeSequence = sequence;
    window.currentPracticeIndex = 0;
    window.currentPracticePopup = popup;
}

// 开始练习序列
function startPracticeSequence() {
    if (window.currentPracticeSequence && window.currentPracticeIndex < window.currentPracticeSequence.length) {
        const text = window.currentPracticeSequence[window.currentPracticeIndex];
        const practiceTextElement = document.getElementById('practiceText');
        if (practiceTextElement) {
            practiceTextElement.textContent = text;
        }
        
        // 播放音频
        playAudio(text);
        
        // 2.5秒后播放下一个
        setTimeout(() => {
            window.currentPracticeIndex++;
            if (window.currentPracticeIndex < window.currentPracticeSequence.length) {
                startPracticeSequence();
            } else {
                // 练习完成
                const practiceTextElement = document.getElementById('practiceText');
                if (practiceTextElement) {
                    practiceTextElement.textContent = '练习完成！太棒了！🎉';
                }
                setTimeout(() => {
                    closePracticePopup();
                }, 2000);
            }
        }, 2500);
    }
}

// 关闭练习弹窗
function closePracticePopup() {
    if (window.currentPracticePopup) {
        window.currentPracticePopup.remove();
        window.currentPracticePopup = null;
        window.currentPracticeSequence = null;
        window.currentPracticeIndex = 0;
    }
}

// 完成字母学习
function completeLetter() {
    if (!completedLetters.has(currentLetter)) {
        completedLetters.add(currentLetter);
        stars += 3;
        saveProgress();
        showSuccessPopup();
        updateProgress();
        renderAlphabetGrid();
    }
    showAlphabetGrid();
}

// 显示成功提示
function showSuccessPopup() {
    successPopup.style.display = 'flex';
    setTimeout(() => {
        successPopup.style.display = 'none';
    }, 2000);
}

// 更新进度
function updateProgress() {
    const progress = (completedLetters.size / 26) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${completedLetters.size}/26`;
    starCount.textContent = `⭐ ${stars}`;
}

// 显示字母网格
function showAlphabetGrid() {
    alphabetGrid.style.display = 'grid';
    letterDetail.style.display = 'none';
    gamesSection.style.display = 'none';
    
    // 更新导航状态
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-section="alphabet"]').classList.add('active');
}

// 显示游戏区域
function showGamesSection() {
    alphabetGrid.style.display = 'none';
    letterDetail.style.display = 'none';
    gamesSection.style.display = 'block';
    
    // 隐藏所有游戏
    document.querySelectorAll('.game-container').forEach(game => {
        game.style.display = 'none';
    });
    document.querySelector('.games-menu').style.display = 'block';
    
    // 更新导航状态
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('[data-section="games"]').classList.add('active');
}

// 开始游戏
function startGame(gameType) {
    currentGame = gameType;
    document.querySelector('.games-menu').style.display = 'none';
    
    switch(gameType) {
        case 'puzzle':
            startPuzzleGame();
            break;
        case 'balloon':
            startBalloonGame();
            break;
        case 'match':
            startMatchGame();
            break;
    }
}

// 拼图游戏
function startPuzzleGame() {
    document.getElementById('puzzleGame').style.display = 'block';
    
    // 随机选择一个字母
    const letters = Array.from(completedLetters);
    if (letters.length === 0) {
        letters.push('A', 'B', 'C'); // 默认字母
    }
    const targetLetter = letters[Math.floor(Math.random() * letters.length)];
    
    // 设置目标
    const puzzleTarget = document.getElementById('puzzleTarget');
    puzzleTarget.textContent = targetLetter;
    puzzleTarget.dataset.target = targetLetter;
    
    // 生成拼图片段
    const puzzlePieces = document.getElementById('puzzlePieces');
    puzzlePieces.innerHTML = '';
    
    // 创建正确片段和干扰片段
    const allLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const shuffledLetters = allLetters.sort(() => Math.random() - 0.5).slice(0, 4);
    if (!shuffledLetters.includes(targetLetter)) {
        shuffledLetters[0] = targetLetter;
    }
    
    shuffledLetters.forEach(letter => {
        const piece = document.createElement('div');
        piece.className = 'puzzle-piece';
        piece.textContent = letter;
        piece.addEventListener('click', () => checkPuzzlePiece(piece, targetLetter));
        puzzlePieces.appendChild(piece);
    });
}

// 检查拼图片段
function checkPuzzlePiece(piece, target) {
    if (piece.textContent === target) {
        piece.classList.add('correct');
        playAudio('Correct!');
        setTimeout(() => {
            showSuccessPopup();
            stars += 1;
            updateProgress();
            saveProgress();
            // 2秒后自动开始下一关
            setTimeout(() => {
                startPuzzleGame();
            }, 2000);
        }, 500);
    } else {
        piece.style.background = '#ff6b6b';
        setTimeout(() => {
            piece.style.background = '';
        }, 500);
    }
}

// 气球游戏
function startBalloonGame() {
    document.getElementById('balloonGame').style.display = 'block';
    
    // 随机选择目标字母
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const targetLetter = letters[Math.floor(Math.random() * letters.length)];
    document.getElementById('targetLetter').textContent = targetLetter;
    
    // 生成气球
    const balloonsArea = document.getElementById('balloonsArea');
    balloonsArea.innerHTML = '';
    
    const balloonColors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3'];
    const shuffledLetters = letters.sort(() => Math.random() - 0.5).slice(0, 6);
    if (!shuffledLetters.includes(targetLetter)) {
        shuffledLetters[0] = targetLetter;
    }
    
    shuffledLetters.forEach((letter, index) => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.background = balloonColors[index];
        balloon.style.animationDelay = `${index * 0.2}s`;
        balloon.textContent = letter;
        balloon.addEventListener('click', () => checkBalloon(balloon, targetLetter));
        balloonsArea.appendChild(balloon);
    });
}

// 检查气球
function checkBalloon(balloon, target) {
    if (balloon.textContent === target) {
        balloon.style.transform = 'scale(0)';
        playAudio('Great job!');
        setTimeout(() => {
            showSuccessPopup();
            stars += 1;
            updateProgress();
            saveProgress();
        }, 500);
    } else {
        balloon.style.background = '#ff6b6b';
        setTimeout(() => {
            balloon.remove();
        }, 300);
    }
}

// 配对游戏
function startMatchGame() {
    document.getElementById('matchGame').style.display = 'block';
    
    // 选择3个字母进行配对
    const selectedLetters = ['A', 'B', 'C'];
    gameData.matchPairs = [];
    gameData.selectedItems = [];
    
    const lettersColumn = document.getElementById('lettersColumn');
    const imagesColumn = document.getElementById('imagesColumn');
    
    lettersColumn.innerHTML = '';
    imagesColumn.innerHTML = '';
    
    // 创建字母和对应的图片
    selectedLetters.forEach(letter => {
        const letterData = alphabetData[letter];
        const word = letterData.words[0];
        
        // 字母项
        const letterItem = document.createElement('div');
        letterItem.className = 'match-item';
        letterItem.textContent = letter;
        letterItem.dataset.letter = letter;
        letterItem.addEventListener('click', () => selectMatchItem(letterItem));
        lettersColumn.appendChild(letterItem);
        
        // 图片项
        const imageItem = document.createElement('div');
        imageItem.className = 'match-item';
        imageItem.innerHTML = `${word.emoji}<br>${word.word}`;
        imageItem.dataset.letter = letter;
        imageItem.addEventListener('click', () => selectMatchItem(imageItem));
        imagesColumn.appendChild(imageItem);
    });
    
    // 打乱图片顺序
    const imageItems = Array.from(imagesColumn.children);
    imageItems.sort(() => Math.random() - 0.5);
    imageItems.forEach(item => imagesColumn.appendChild(item));
}

// 选择配对项
function selectMatchItem(item) {
    if (item.classList.contains('matched')) return;
    
    if (gameData.selectedItems.length < 2) {
        item.classList.add('selected');
        gameData.selectedItems.push(item);
        
        if (gameData.selectedItems.length === 2) {
            setTimeout(() => checkMatch(), 500);
        }
    }
}

// 检查配对
function checkMatch() {
    const [item1, item2] = gameData.selectedItems;
    
    if (item1.dataset.letter === item2.dataset.letter) {
        // 配对成功
        item1.classList.remove('selected');
        item2.classList.remove('selected');
        item1.classList.add('matched');
        item2.classList.add('matched');
        playAudio('Perfect match!');
        
        // 检查是否全部完成
        const allMatched = document.querySelectorAll('.match-item.matched').length === 6;
        if (allMatched) {
            setTimeout(() => {
                showSuccessPopup();
                stars += 2;
                updateProgress();
                saveProgress();
                // 3秒后自动开始下一关
                setTimeout(() => {
                    startMatchGame();
                }, 3000);
            }, 500);
        }
    } else {
        // 配对失败
        item1.classList.remove('selected');
        item2.classList.remove('selected');
    }
    
    gameData.selectedItems = [];
}

// 设置事件监听器
function setupEventListeners() {
    // 字母发音按钮
    document.getElementById('letterPlayBtn').addEventListener('click', () => {
        playLetterAudio(currentLetter);
    });
    
    // 完成学习按钮
    document.getElementById('completeBtn').addEventListener('click', completeLetter);
    
    // 返回按钮
    document.getElementById('backBtn').addEventListener('click', showAlphabetGrid);
    document.getElementById('gameBackBtn').addEventListener('click', showGamesSection);
    
    // 底部导航
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.currentTarget.dataset.section;
            if (section === 'alphabet') {
                showAlphabetGrid();
            } else if (section === 'games') {
                showGamesSection();
            }
        });
    });
    
    // 游戏按钮
    document.querySelectorAll('.game-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const gameType = e.currentTarget.dataset.game;
            startGame(gameType);
        });
    });
    
    // 成功提示点击关闭
    successPopup.addEventListener('click', () => {
        successPopup.style.display = 'none';
    });
}

// 保存进度
function saveProgress() {
    const progress = {
        completedLetters: Array.from(completedLetters),
        stars: stars
    };
    localStorage.setItem('alphabetLearningProgress', JSON.stringify(progress));
}

// 加载进度
function loadProgress() {
    const saved = localStorage.getItem('alphabetLearningProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        completedLetters = new Set(progress.completedLetters || []);
        stars = progress.stars || 0;
        updateProgress();
        renderAlphabetGrid();
    }
}

// 防止页面滚动（移动端优化）
document.addEventListener('touchmove', function(e) {
    if (e.target.closest('.container')) {
        e.preventDefault();
    }
}, { passive: false });

// 处理音频播放错误
audioPlayer.addEventListener('error', function() {
    console.log('音频播放失败，使用语音合成替代');
});
