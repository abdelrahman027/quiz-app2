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
    return (
        <div className='w-1/2 mx-auto mt-12'>
            <h1 className={`${Reset_module['reset-text']} text-2xl`}>
                You scored: {((props.correctQuestions / props.totalQuestions) * 100).toFixed(2)}%
            </h1>
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
