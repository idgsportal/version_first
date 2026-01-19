const playNotificationSound = (type) => {
    try {
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

        const playTone = (freq, startTime, duration, volume) => {
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            oscillator.type = 'sine'; // Sine wave 'sweet' sound ke liye
            oscillator.frequency.setValueAtTime(freq, startTime);

            // Smooth volume envelope (Fade in and Out)
            gainNode.gain.setValueAtTime(0, startTime);
            gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.05);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

            oscillator.start(startTime);
            oscillator.stop(startTime + duration);
        };

        const now = audioCtx.currentTime;

        if (type === 'success') {
            // Paytm-like Double Chime (Musical Low-to-High)
            playTone(523.25, now, 0.4, 0.1);      // Note C5
            playTone(659.25, now + 0.1, 0.5, 0.1);  // Note E5 (Thodi der baad)
        }
        else if (type === 'error') {
            // Error: Double Buzz (High-to-Low)
            playTone(300, now, 0.3, 0.15);
            playTone(200, now + 0.15, 0.3, 0.15);
        }
        else {
            // Warning: Simple Bell
            playTone(440, now, 0.5, 0.1);
        }
    } catch (e) {
        console.warn("Audio Context error:", e);
    }
};

export const toast = {
    success: (msg) => {
        playNotificationSound('success');
        window.dispatchEvent(new CustomEvent("SHOW_TOAST", { detail: { msg, type: 'success' } }));
    },
    error: (msg) => {
        playNotificationSound('error');
        window.dispatchEvent(new CustomEvent("SHOW_TOAST", { detail: { msg, type: 'error' } }));
    },
    warning: (msg) => {
        playNotificationSound('warning');
        window.dispatchEvent(new CustomEvent("SHOW_TOAST", { detail: { msg, type: 'warning' } }));
    },
};