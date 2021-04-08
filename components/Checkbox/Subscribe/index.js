import Checkbox from '../';

const SubCheckboxGroup = () => (
    <>
        <Checkbox
            value='gdpr'
            content='I concent to receive promotional emails about your products and services'
        />
        <Checkbox
            value='featured'
            content='gimme the techbrief'
        />
        <Checkbox
            value='blockchain&cryptocurrency'
            content='do you even blockchain/crypto bruh'
        />
        <Checkbox
            value='programming'
            content='I like clean code and I cannot lie'
        />
        <Checkbox
            value='startups&feature&technology'
            content='send me stories about startups and the future of everything'
        />
    </>
)

export default SubCheckboxGroup;