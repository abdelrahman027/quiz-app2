import { Question } from '../types';
import Answers from './Answers';
import Question_module from './Question.module.scss';

type Props = {
    question: Question;
    onSubmit: (correct: boolean) => void;
};

function QuestionComp(props: Props) {
    return (
        <div>
            <h3 className={`${Question_module.question} md:text-2xl my-4 font-semibold text-white`}>{props.question.question}</h3>
            <Answers question={props.question} onSubmit={props.onSubmit} />
        </div>
    );
}

export default QuestionComp;
