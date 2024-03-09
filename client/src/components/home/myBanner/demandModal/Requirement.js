import { Input } from "../../../common/input/Input"
import { Textarea } from "../../../common/textarea/Textarea"

export const Requirement = (props) => {

    return (
        <div>
            <Input 
                onChange={(e) => props.setTitle(e.target.value)} 
                value={props.title} 
                placeholder={'Enter title of your design...'}
                label={'Title'}
                />
            <Textarea 
                rows={5} 
                placeholder='Enter the content you want on your design...' 
                label={'Body Content'}
                onChange={(e) => props.setBodyContent(e.target.value)}
                value={props.bodyContent}
                />
            <Textarea 
                rows={5} 
                placeholder='Any design requirement or wish for your creative...' 
                label={'Design requirement '}
                onChange={(e) => props.setDesignRequirement(e.target.value)}
                value={props.designRequirement}
                />
        </div>
    )
}