// Imports
import React, { Component } from 'react'

// UI Imports
import { Grid, GridCell } from '../ui/grid'
import { H1, H6 } from '../ui/typography'
import Modal from '../ui/modal/Modal'
import Button from '../ui/button'
import { white } from '../ui/common/colors'
import { textLevel1 } from '../ui/common/shadows'

// App Imports

// Component
class Onboarding extends Component {

    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            currentStep: 0
        }
    }

    componentDidMount() {
        const onboarding = window.localStorage.getItem('onboarding')
        if(!onboarding) {
            this.toggleVisible(true)

            window.localStorage.setItem('onboarding', 1)
        }
    }

    toggleVisible = (visible) => {
        this.setState({
            visible
        })
    }

    nextStep = () => {
        this.setState(state => ({
            currentStep: state.currentStep + 1
        }))
    }

    close = () => {
        this.toggleVisible(false)
    }

    render() {
        const steps = [
            <Grid gutter={ false } alignCenter={ true } style={ { height: '100%', textAlign: 'center', color: white } }>
                {/* 1. Welcome to Crate */}

                {/* Left - Headline and info */}
                <GridCell>
                    <H1 font="secondary" style={ { textShadow: textLevel1 } }>Welcome to Crate</H1>

                    <H6 style={ { marginTop: '0.5em' } }>Your monthly subscription of trendy <br/> clothes and accessories</H6>

                    <Button theme="primary" style={ { marginTop: '1.5em' } } onClick={ this.nextStep }>Next</Button>
                </GridCell>

                {/* Right - Image */}
                <GridCell>
                    <img src={ '/images/collage.png' } alt="collage" title="products collage" style={ { width: 400 } } />
                </GridCell>
            </Grid>,

            <Grid gutter={ false } alignCenter={ true } style={ { height: '100%', textAlign: 'center', color: white } }>
                {/* 2. For Men */}

                {/* Left - Image */}
                <GridCell>
                    <img src={ '/images/collage.png' } alt="collage" title="products collage" style={ { width: 400 } } />
                </GridCell>

                {/* Right - Headline and info */}
                <GridCell>
                    <H1 font="secondary" style={ { textShadow: textLevel1 } }>For Men</H1>

                    <H6 style={ { marginTop: '0.5em' } }>Your monthly subscription of trendy <br/> clothes and accessories</H6>

                    <Button theme="primary" style={ { marginTop: '1.5em' } } onClick={ this.nextStep }>Next</Button>
                </GridCell>
            </Grid>,

            <Grid gutter={ false } alignCenter={ true } style={ { height: '100%', textAlign: 'center', color: white } }>
                {/* 3. For Women */}

                {/* Left - Headline and info */}
                <GridCell>
                    <H1 font="secondary" style={ { textShadow: textLevel1 } }>For Women</H1>

                    <H6 style={ { marginTop: '0.5em' } }>Your monthly subscription of trendy <br/> clothes and accessories</H6>

                    <Button theme="primary" style={ { marginTop: '1.5em' } } onClick={ this.nextStep }>Next</Button>
                </GridCell>

                {/* Right - Image */}
                <GridCell>
                    <img src={ '/images/collage.png' } alt="collage" title="products collage" style={ { width: 400 } } />
                </GridCell>
            </Grid>,

            <Grid gutter={ false } alignCenter={ true } style={ { height: '100%', textAlign: 'center', color: white } }>
                {/* 4. Fix me up */}

                {/* Center - Headline and info */}
                <GridCell>
                    <H1 font="secondary" style={ { textShadow: textLevel1 } }>Fix me up</H1>

                    <H6 style={ { marginTop: '0.5em' } }>Subscribe to your crate!</H6>

                    <Button theme="primary" style={ { marginTop: '1.5em' } } onClick={ this.close }>Start</Button>
                </GridCell>
            </Grid>
        ]

        return(
            <div>
                {/* Modal */}
                <Modal visible={ this.state.visible }>
                    { steps[this.state.currentStep] }
                </Modal>
            </div>
        )
    }
}

export default Onboarding