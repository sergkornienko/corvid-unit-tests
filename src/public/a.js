// Filename: public/a.js 
import wixLocation from 'wix-location';
import { buildLargeCollaider } from '../backend/b.jsw';

export function getBaseUrl() {
	buildLargeCollaider();
	// $w('#aa').text = 'meh';
	return wixLocation.baseUrl;
}