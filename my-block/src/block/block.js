/**
 * BLOCK: my-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
//const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
 import { registerBlockType } from '@wordpress/blocks';
 import { RichText } from '@wordpress/block-editor';
 import icons from './components/icons';
 const { Component } = wp.element;

 
 class HeaderBlock extends Component {
	render() {
		const { attributes, setAttributes } = this.props;
		
		return (
			<div className="headerbox">
			    <h3> TEST OPTION 2 </h3> 
				<h1>[sitetitle]</h1>
				<p>recreate this whole icon box component as UI of your gutenberg block; displaying site's title as a header and sites tagline at the bottom below the 2nd paragraph. the 2nd paragraph should be editable.</p>
				<hr/>
			</div>
		);
	}
}


 class FirstBlock extends Component {
	render() {
		const { attributes, setAttributes } = this.props;
		return (
			<RichText
			tagName="p"
			placeholder="Write your Content here"
			value={attributes.myRichText}
			onChange={(newtext) => setAttributes({ myRichText: newtext })}
		/>
		);
	}
}

class FooterBlock extends Component {
	render() {
		const { attributes, setAttributes } = this.props;
		
		return (
			<div className="footerbox">
				<h3>[sitetagline]</h3>
			</div>
		);
	}
}


 registerBlockType( 'my-block/firstblock', {
	 apiVersion: 2,
	 title: 'My Block',
	 icon: 'smiley',
	 category: 'common',
	 attributes: {
		myRichText: {
			 type: 'string',
			 source: 'html',
			 selector: 'p',
		 },
	 },
	
	 edit: FirstBlock,
	 save: ( props ) => {
		const { attributes } = props;
		 return (
			 <div className="mainbox">
				 {icons.upload}
               <HeaderBlock/>

			 <RichText.Content
				 tagName="p"
				 value={ attributes.myRichText }
			 />
			 <FooterBlock/>
			 </div>
		 );
	 },
 } );
 