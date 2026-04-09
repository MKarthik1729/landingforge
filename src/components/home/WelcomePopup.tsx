import { useState, useEffect } from 'react';
import { FaMoon, FaSun, FaDesktop, FaArrowRight, FaTimes, FaMousePointer } from 'react-icons/fa';

function Step1Animation() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const run = () => {
      setPhase(0); // Normal
      timeout = setTimeout(() => {
        setPhase(1); // Zoom
        timeout = setTimeout(() => {
          setPhase(2); // Effect
          timeout = setTimeout(() => {
             run();
          }, 2500);
        }, 1500);
      }, 1500);
    };
    run();
    return () => clearTimeout(timeout);
  }, []);

  const isDark = phase >= 2;
  const isZoomed = phase >= 1;

  return (
    <div className="w-full aspect-video relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-inner">
      <div 
        className={`absolute inset-0 transition-transform duration-1000 origin-bottom-right ${isZoomed ? 'scale-[2.5] -translate-x-4 -translate-y-4' : 'scale-100'}`}
      >
        <div className={`w-full h-full flex flex-col transition-colors duration-500 ${isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}>
           <div className={`h-4 w-full border-b ${isDark ? 'border-slate-800' : 'border-slate-100'} flex items-center px-2 space-x-1.5`}>
             <div className="w-6 h-1.5 bg-current opacity-20 rounded-full" />
             <div className="w-4 h-1.5 bg-current opacity-20 rounded-full" />
           </div>
           <div className="flex-1 p-4 flex flex-col items-center justify-center space-y-2">
             <div className="w-16 h-3 bg-current opacity-20 rounded-full" />
             <div className="w-24 h-1.5 bg-current opacity-10 rounded-full" />
             <div className="w-12 h-4 mt-2 bg-teal-500 rounded" />
           </div>
           <div className={`absolute bottom-2 right-2 w-5 h-5 rounded-full flex items-center justify-center shadow transition-colors ${isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'}`}>
             {isDark ? <FaMoon className="text-[6px] text-teal-400" /> : <FaSun className="text-[6px] text-teal-500" />}
           </div>
           <div className={`absolute bottom-1 right-1 transition-all duration-700 text-slate-800 dark:text-white ${phase === 1 ? 'translate-x-0 translate-y-0 opacity-100 scale-100' : phase >= 2 ? 'translate-x-0 translate-y-0 opacity-100 scale-90 text-teal-500' : 'translate-x-10 translate-y-10 opacity-0'}`}>
             <FaMousePointer className="text-[10px] drop-shadow-md" />
           </div>
        </div>
      </div>
    </div>
  )
}

function Step2Animation() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const run = () => {
      setPhase(0); // Normal
      timeout = setTimeout(() => {
        setPhase(1); // Zoom to Middle Button
        timeout = setTimeout(() => {
          setPhase(2); // Click & Effect (Show grid)
          timeout = setTimeout(() => {
             run();
          }, 2500);
        }, 1500);
      }, 1500);
    };
    run();
    return () => clearTimeout(timeout);
  }, []);

  const showGrid = phase >= 2;
  const isZoomed = phase >= 1 && phase < 2;

  return (
    <div className="w-full aspect-video relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-inner">
      <div 
        className={`absolute inset-0 transition-transform duration-1000 origin-center ${isZoomed ? 'scale-[2.5]' : 'scale-100'}`}
      >
        <div className="w-full h-full flex flex-col bg-white dark:bg-slate-900">
           <div className="h-4 w-full border-b border-slate-100 dark:border-slate-800 flex items-center justify-between px-2">
             <div className="w-8 h-1.5 bg-slate-800 dark:bg-white opacity-20 rounded-full" />
             <div className="flex space-x-1.5">
                <div className="w-4 h-1.5 bg-slate-800 dark:bg-white opacity-20 rounded-full" />
                <div className={`w-4 h-1.5 rounded-full transition-colors ${showGrid ? 'bg-blue-500' : 'bg-slate-800 dark:bg-white opacity-20'}`} />
             </div>
           </div>
           
           <div className="flex-1 p-2">
             {!showGrid ? (
               <div className="h-full flex flex-col items-center justify-center space-y-1.5 opacity-100 transition-opacity">
                 <div className="w-16 h-3 bg-slate-800 dark:bg-white opacity-20 rounded-full" />
                 <div className="w-24 h-1.5 bg-slate-800 dark:bg-white opacity-10 rounded-full" />
                 <div className="w-16 h-4 mt-1 bg-blue-500 rounded relative flex items-center justify-center">
                   <span className="text-[4.5px] font-bold text-white tracking-wide">Browse Demos</span>
                   <div className={`absolute -bottom-3 right-0 transition-all duration-700 text-slate-800 dark:text-white z-10 ${phase === 1 ? 'translate-x-0 translate-y-0 opacity-100 scale-100' : phase >= 2 ? 'translate-x-0 translate-y-0 opacity-100 scale-90 text-blue-500' : 'translate-x-10 translate-y-10 opacity-0'}`}>

                     <FaMousePointer className="text-[8px] drop-shadow-md"> </FaMousePointer>
                   </div>
                 </div>
               </div>
             ) : (
               <div className="h-full grid grid-cols-2 gap-1.5 p-1 animate-in fade-in duration-500">
                 <div className="bg-slate-100 dark:bg-slate-800 rounded shadow-sm" />
                 <div className="bg-slate-100 dark:bg-slate-800 rounded shadow-sm" />
                 <div className="bg-slate-100 dark:bg-slate-800 rounded shadow-sm" />
                 <div className="bg-slate-100 dark:bg-slate-800 rounded shadow-sm" />
               </div>
             )}
           </div>
        </div>
      </div>
    </div>
  )
}

function Step3Animation() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const run = () => {
      setPhase(0); // Normal Demo 1
      timeout = setTimeout(() => {
        setPhase(1); // Zoom to Right Middle White Button
        timeout = setTimeout(() => {
          setPhase(2); // Click & Effect (Show Demo 2)
          timeout = setTimeout(() => {
             run();
          }, 2500);
        }, 1500);
      }, 1500);
    };
    run();
    return () => clearTimeout(timeout);
  }, []);

  const showDemo2 = phase >= 2;
  const isZoomed = phase >= 1 && phase < 2;

  return (
    <div className="w-full aspect-video relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 bg-black shadow-inner">
      <div 
        className={`absolute inset-0 transition-transform duration-1000 origin-right ${isZoomed ? 'scale-[2.5] -translate-x-2' : 'scale-100'}`}
      >
        <div className="w-full h-full relative">
           <div className={`absolute inset-0 transition-opacity duration-500 ${showDemo2 ? 'opacity-0' : 'opacity-100'} bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center`}>
              <div className="w-10 h-10 rounded-full bg-white/20 shadow-lg" />
           </div>
           <div className={`absolute inset-0 transition-opacity duration-500 ${showDemo2 ? 'opacity-100' : 'opacity-0'} bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center`}>
              <div className="w-10 h-10 rounded-lg bg-white/20 shadow-lg" />
           </div>

           <div className="absolute top-1/2 -translate-y-1/2 right-2 w-5 h-5 bg-white rounded-full shadow-lg flex items-center justify-center">
              <FaArrowRight className="text-slate-900 text-[6px]" />
           </div>

           <div className={`absolute top-1/2 right-1 transition-all duration-700 text-white z-10 ${phase === 1 ? 'translate-x-0 translate-y-0 opacity-100 scale-100' : phase >= 2 ? 'translate-x-0 translate-y-0 opacity-100 scale-90 text-purple-200' : 'translate-x-10 translate-y-10 opacity-0'}`}>
             <FaMousePointer className="text-[10px] drop-shadow-md" />
           </div>
        </div>
      </div>
    </div>
  )
}

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(() => !localStorage.getItem('welcomePopupShown'));
  const [currentStep, setCurrentStep] = useState(0);

  if (!isOpen) return null;

  const steps = [
    {
      title: "1. Theme Toggle",
      description: (
        <>
           Watch how toggling the floating button at the bottom-right completely transforms the entire site between light and dark modes!
        </>
      ),
      icon: (
        <div className="h-16 w-16 bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 rounded-full flex items-center justify-center text-2xl shadow-inner shrink-0">
          <FaSun className="hidden dark:block" />
          <FaMoon className="block dark:hidden" />
        </div>
      ),
      Animation: Step1Animation,
    },
    {
      title: "2. Explore Demos",
      description: (
        <>
           To explore all our landing pages, simply click the <strong>See Demos</strong> button in the middle of the page to see the full showcase.
        </>
      ),
      icon: (
        <div className="h-16 w-16 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-2xl shadow-inner shrink-0">
          <FaDesktop />
        </div>
      ),
      Animation: Step2Animation,
    },
    {
      title: "3. Next Demo",
      description: (
        <>
            While viewing any demo, easily jump to the next one using the <strong>big white button</strong> that appears when you hover at the right middle.
        </>
      ),
      icon: (
        <div className="h-16 w-16 bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center text-2xl shadow-inner shrink-0">
          <FaArrowRight />
        </div>
      ),
      Animation: Step3Animation,
    }
  ];

  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev < steps.length - 1) {
        return prev + 1;
      } else {
        setIsOpen(false);
        localStorage.setItem('welcomePopupShown', 'true');
        return prev; // Keep current step if closing
      }
    });
  };
  const StepContent = steps[currentStep];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-4xl w-full p-6 md:p-12 relative border border-slate-200 dark:border-slate-800 overflow-y-auto max-h-[95vh] animate-in zoom-in-95 duration-500">
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-white transition-colors rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 z-10" 
          onClickCapture={() => {
            localStorage.setItem('welcomePopupShown', 'true');
          }}
        >
          <FaTimes className="text-xl md:text-2xl" />
        </button>

        <h2 className="hidden md:block text-3xl md:text-4xl font-extrabold mb-10 text-center text-slate-900 dark:text-white tracking-tight">
          Welcome to the Experience
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center md:min-h-[300px]">
          {/* Text Content */}
          <div className="hidden md:flex flex-1 space-y-6 flex-col items-center md:items-start text-center md:text-left">
            {StepContent.icon}
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
              {StepContent.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
              {StepContent.description}
            </p>
            
            {/* Step Indicators */}
            <div className="flex space-x-3 pt-4">
              {steps.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2.5 rounded-full transition-all duration-500 ${idx === currentStep ? 'w-10 bg-teal-500' : 'w-2.5 bg-slate-200 dark:bg-slate-700'}`}
                />
              ))}
            </div>
          </div>

          {/* Animation Preview */}
          <div className="flex-1 w-full max-w-sm rounded-xl p-2 border border-slate-100 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-800/20 shadow-sm">
             <StepContent.Animation />
          </div>
        </div>
        
        <div className="mt-12 flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-8">
          <button 
            onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
            className={`px-6 py-3 font-semibold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors ${currentStep === 0 ? 'invisible' : ''}`}
          >
            Back
          </button>
          <button 
            onClick={handleNext}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-10 rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] transition-all transform hover:-translate-y-0.5 text-lg flex items-center space-x-2"
          >
            <span>{currentStep === steps.length - 1 ? 'Start Exploring' : 'Next'}</span>
            {currentStep < steps.length - 1 && <FaArrowRight className="text-sm" />}
          </button>
        </div>
      </div>
    </div>
  );
}
