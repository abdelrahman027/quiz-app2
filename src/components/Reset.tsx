import App_module from '../App.module.scss';
import Answer_module from './Answer.module.scss';
import Classnames from 'classnames';
import Reset_module from './Reset.module.scss';
type Props = {
    totalQuestions: number;
    correctQuestions: number;
    onPress: () => void;
};
function Reset(props: Props) {
    const score = ((props.correctQuestions / props.totalQuestions) * 100).toFixed(2)
    console.log(parseInt(score))
    return (
        <div className='w-1/2 mx-auto mt-12 bg-black/40 p-6 rounded-lg'>
            <h1 className={`${Reset_module['reset-text']} text-2xl text-white`}>
                You scored: {score}%
            </h1>
            <p className='text-white text-xl'> You are {parseInt(score)>=50?"Left sided brain":"Right Sided Brain"}</p>
            <button
                            className={Classnames(
                                App_module['next-btn'],
                                Answer_module.answer,
                                Reset_module['reset-btn']
                                
                            )}
            >
                Check Your Brain here
            </button>
            <button
                onClick={props.onPress}
                className={Classnames(
                    App_module['next-btn'],
                    Answer_module.answer,
                    Reset_module['reset-btn']
                )}
            >
                Press to Try Again!
            </button>
        </div>
    );
}

export default Reset;
