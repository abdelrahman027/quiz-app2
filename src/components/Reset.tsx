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
    const score = ((props.correctQuestions / props.totalQuestions) * 100).toFixed(2);
    console.log(parseInt(score));
    return (
        <div className="w-full md:w-1/2 mx-auto mt-12 bg-black/40 p-6 rounded-lg">
            <h1 className={`${Reset_module['reset-text']} text-2xl text-white`}>
                You scored: {score}%
            </h1>
            <div className="text-white">
                {' '}
                {parseInt(score) >= 50 ? (
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">You are left sided brain </h3>
                        <ul className="list-disc">
                            <li>
                                Logical and Analytical: Prefers structured, step-by-step reasoning.
                            </li>
                            <li>
                                Language Processing: Stronger in tasks related to reading, writing,
                                and speaking.
                            </li>
                            <li>
                                Mathematics and Facts: Focuses on numbers, sequences, and logical
                                reasoning.
                            </li>
                            <li>
                                Detail-Oriented: Tends to focus on specifics rather than the big
                                picture
                            </li>
                        </ul>
                        <h3 className="text-lg font-semibold">Suitable learning style</h3>
                        <ol className="list-decimal">
                            <li>
                                Sequential Learning: Prefers material presented in a logical,
                                ordered sequence. Example: Learning through outlines, lists, and
                                step-by-step instructions.
                            </li>
                            <li>
                                Verbal Learning: Benefits from reading, writing, and verbal
                                discussions. Example: Engages with textbooks, note-taking, and
                                language-based resources.
                            </li>

                            <li>
                                Analytical Problem Solving: Enjoys solving math problems or
                                analyzing data. Example: Breaking tasks into smaller parts to
                                understand the whole.
                            </li>
                        </ol>
                    </div>
                ) : (
                    <div className="p-4">
                    <h3 className="text-lg font-semibold">You are Right sided brain </h3>
                    <ul className="list-disc">
                        <li>
                        Creative and Intuitive: Focuses on creativity, imagination, and holistic thinking.
                        </li>
                        <li>
                        Visual-Spatial Abilities: Stronger in interpreting images, patterns, and spatial relationships.
                        </li>
                        <li>
                        Emotionally Expressive: More attuned to feelings and non-verbal cues.
                        </li>
                        <li>
                        Big Picture Thinking: Prefers seeing how things connect as a whole.
                        </li>
                    </ul>
                    <h3 className="text-lg font-semibold">Suitable learning style</h3>
                    <ol className="list-decimal">
                        <li>
                        Visual Learning: Learns best through pictures, diagrams, and visual aids.
                        Example: Mind maps, infographics, and charts.
                        </li>
                        <li>
                        Experiential Learning: Prefers hands-on activities and learning by doing.
                        Example: Art projects, role-playing, and building models.
                        </li>

                        <li>
                        Creative Exploration: Thrives in environments encouraging creativity and innovation.
                        Example: Writing stories, brainstorming, or engaging in music and art.
                        </li>
                    </ol>
                </div>
                )}
            </div>

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
