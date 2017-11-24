import { request } from "https";

var Adapter = require("webrtc-adapter");
var global = require("global");
var React = require("react");
var ReactNative = require("react-native");

module.exports = {
	RTCPeerConnection: global.RTCPeerConnection,
	RTCIceCandidate: global.RTCIceCandidate,
	RTCSessionDescription: global.RTCSessionDescription,
	RTCView: RTCViewWeb,
	MediaStream: global.MediaStream,
	MediaStreamTrack: global.MediaStreamTrack,
	getUserMedia: global.navigator.mediaDevices.bind(global.navigator.mediaDevices),
};

function RTCViewWeb(props) {
	var mirror = props.mirror;
	var objectFit = props.objectFit;
	var streamURL = props.streamURL;

	var videoStyle = {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		width: "100%",
		height: "100%",
		objectPosition: "center center",
		objectFit: objectFit || "contain"
	};

	if(mirror) {
		videoStyle.transform = "rotateY(180deg)";
		videoStyle.WebkitTransform = "rotateY(180deg)";
		videoStyle.MozTransform = "rotateY(180deg)";
	}

	return React.createElement(
		ReactNative.View, props,
			React.createElement(
				"video", {
					style: videoStyle,
					src: streamURL
				}
			)
		);
}
