// Importing the necessary libraries and components from react, react-force-graph-2d and d3-force
import React, { useEffect, useRef, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import "./ImageGraph.css";
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter,
  forceCollide,
} from "d3-force";
import { scaleLinear } from "d3-scale";

// Define a functional component for the ImageGraph
const ImageGraph = () => {
  // Initial setup of useRef and useState for different variables used in the component
  const containerRef = useRef();
  const simulationRef = useRef(); // Ref to store simulation
  const [graphData, setGraphData] = useState(null);
  const [images, setImages] = useState({});
  const [lastHoveredNode, setLastHoveredNode] = useState(null);
  const [hoverStartTime, setHoverStartTime] = useState(null);
  const [hoverProgress, setHoverProgress] = useState(0);
  const [zoom, setZoom] = useState(1);

  const [viewSize, setViewSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [initialViewSize] = useState(viewSize); // save initial view size

  // Constants for manipulating node size and transition time
  const hoverSizeMultiplier = 2;
  const transitionTime = 2000;
  const largestNodeSize = 60;
  const largeNodeSize = 50;
  const mediumNodeSize = 40;
  const smallNodeSize = 30;

  // Use effect hook for handling the hover animation
  useEffect(() => {
    if (lastHoveredNode && hoverStartTime) {
      const animationFrame = requestAnimationFrame(() => {
        const newProgress = Math.min(
          (Date.now() - hoverStartTime) / transitionTime,
          1
        );
        setHoverProgress(newProgress);
      });
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [lastHoveredNode, hoverStartTime, hoverProgress]);

  // Use effect hook for loading images and setting up the force graph
  useEffect(() => {
    // Array of image names
    const imgs = [
      "agora.png",
      "aragon.png",
      "clarity.png",
      // "dao.png",
      // "operations.png",
      // "create.png",

      "developer.png",
      "dripdropz.png",
      "governance.png",
      "management.png",
      "summon.png",
      "swae.png",
      "voteaire.png",

      "codefree.png",
      "token.png",
      "treasury.png",
      "payment.png",
      "community.png",
      "legal.png",
      "voting.png",
      "charmverse.png",
      "mercury.png",
      "tosidrop.png",
      "crystal.png",
      "wonderverse.png",
      "dework.png",
      "kleoverse.png",
      "sobol.png",
      "kleros.png",
      "coordinape.png",
      "sourcecred.png",
      "roundtable.png",
      "clarity1.png",
      "clarity2.png",
      "aragon1.png",
      "charmverse1.png",
      "mercury1.png",
      "charmverse2.png",
      "wonderverse1.png",
      "swae1.png",
      "dework1.png",
      "summon1.png",
    ];

    // Object to hold loaded images
    const loadedImages = {};
    imgs.forEach((imgName) => {
      const img = new Image();
      img.src = `${process.env.PUBLIC_URL}/imgs/${imgName}`;
      img.onload = () => {
        loadedImages[imgName] = img;
        setImages(loadedImages);
      };
    });

    // Finding the indices of specific images in the array

    // const daoIndex = imgs.indexOf("dao.png");
    // const operationsIndex = imgs.indexOf("operations.png");
    // const createIndex = imgs.indexOf("create.png");

    const developerIndex = imgs.indexOf("developer.png");
    const codeFreeIndex = imgs.indexOf("codefree.png");
    const tokenIndex = imgs.indexOf("token.png");
    const managementIndex = imgs.indexOf("management.png");
    const treasuryIndex = imgs.indexOf("treasury.png");
    const paymentIndex = imgs.indexOf("payment.png");
    const communityIndex = imgs.indexOf("community.png");
    const legalIndex = imgs.indexOf("legal.png");
    const votingIndex = imgs.indexOf("voting.png");
    const clarityIndex = imgs.indexOf("clarity.png");
    const voteaireIndex = imgs.indexOf("voteaire.png");
    const summonIndex = imgs.indexOf("summon.png");
    const charmverseIndex = imgs.indexOf("charmverse.png");
    const aragonIndex = imgs.indexOf("aragon.png");
    const agoraIndex = imgs.indexOf("agora.png");
    const mercuryIndex = imgs.indexOf("mercury.png");
    const crystalIndex = imgs.indexOf("crystal.png");
    const dripdropzIndex = imgs.indexOf("dripdropz.png");
    const tosidropIndex = imgs.indexOf("tosidrop.png");
    const wonderverseIndex = imgs.indexOf("wonderverse.png");
    const deworkIndex = imgs.indexOf("dework.png");
    const swaeIndex = imgs.indexOf("swae.png");
    const kleoverseIndex = imgs.indexOf("kleoverse.png");
    const sobolIndex = imgs.indexOf("sobol.png");
    const klerosIndex = imgs.indexOf("kleros.png");
    const coordinapeIndex = imgs.indexOf("coordinape.png");
    const sourcecredIndex = imgs.indexOf("sourcecred.png");
    const roundtableIndex = imgs.indexOf("roundtable.png");
    const aragon1Index = imgs.indexOf("aragon1.png");
    const clarity1Index = imgs.indexOf("clarity1.png");
    const clarity2Index = imgs.indexOf("clarity2.png");
    const charmverse1Index = imgs.indexOf("charmverse1.png");
    const charmverse2Index = imgs.indexOf("charmverse2.png");
    const wonderverse1Index = imgs.indexOf("wonderverse1.png");
    const swae1Index = imgs.indexOf("swae1.png");
    const mercury1Index = imgs.indexOf("mercury1.png");
    const dework1Index = imgs.indexOf("dework1.png");
    const summon1Index = imgs.indexOf("summon1.png");

    // Define the nodes and links for the graph
    const gData = {
      nodes: imgs.map((img, id) => ({ id, img, neighbors: [], links: [] })),
      links: [
        { source: managementIndex, target: wonderverseIndex },
        { source: managementIndex, target: deworkIndex },
        { source: managementIndex, target: charmverse1Index },
        { source: managementIndex, target: clarity2Index },
        { source: managementIndex, target: swaeIndex },

        { source: communityIndex, target: mercury1Index },
        { source: communityIndex, target: charmverse2Index },
        { source: communityIndex, target: wonderverse1Index },
        { source: communityIndex, target: swae1Index },
        { source: communityIndex, target: kleoverseIndex },
        { source: communityIndex, target: sobolIndex },

        { source: legalIndex, target: klerosIndex },

        { source: paymentIndex, target: coordinapeIndex },
        { source: paymentIndex, target: sourcecredIndex },
        { source: paymentIndex, target: dework1Index },

        { source: treasuryIndex, target: roundtableIndex },

        { source: developerIndex, target: agoraIndex },
        { source: developerIndex, target: mercuryIndex },

        { source: codeFreeIndex, target: crystalIndex },
        { source: codeFreeIndex, target: aragon1Index },
        { source: codeFreeIndex, target: summonIndex },
        { source: codeFreeIndex, target: clarityIndex },

        { source: tokenIndex, target: dripdropzIndex },
        { source: tokenIndex, target: tosidropIndex },

        { source: votingIndex, target: clarity1Index },
        { source: votingIndex, target: voteaireIndex },
        { source: votingIndex, target: summon1Index },
        { source: votingIndex, target: charmverseIndex },
        { source: votingIndex, target: aragonIndex },
      ],
    };

    const scaleX = scaleLinear()
      .domain([0, initialViewSize.width])
      .range([0, viewSize.width]);

    const scaleY = scaleLinear()
      .domain([0, initialViewSize.height])
      .range([0, viewSize.height]);

    // Assign sizes to nodes based on their images
    gData.nodes.forEach((node, index) => {
      switch (node.img) {
        case "dao.png":
          node.size = largestNodeSize;
          break;
        case "create.png":
        case "operations.png":
          node.size = largeNodeSize;
          break;
        case "codefree.png":
        case "community.png":
        case "developer.png":
        case "management.png":
        case "payment.png":
        case "token.png":
        case "legal.png":
        case "treasury.png":
        case "voting.png":
          node.size = mediumNodeSize;
          break;
        default:
          node.size = smallNodeSize;
      }
      if (index === managementIndex) {
        node.fx = scaleX(-250);
        node.fy = scaleY(150);
      } else if (index === communityIndex) {
        node.fx = scaleX(-250);
        node.fy = scaleY(-150);
      } else if (index === legalIndex) {
        node.fx = scaleX(250);
        node.fy = scaleY(-150);
      } else if (index === paymentIndex) {
        node.fx = scaleX(250);
        node.fy = scaleY(10);
      } else if (index === treasuryIndex) {
        node.fx = scaleX(0);
        node.fy = scaleY(0);
      } else if (index === developerIndex) {
        node.fx = scaleX(0);
        node.fy = scaleY(-250);
      } else if (index === codeFreeIndex) {
        node.fx = scaleX(100);
        node.fy = scaleY(-250);
      } else if (index === tokenIndex) {
        node.fx = scaleX(-100);
        node.fy = scaleY(-250);
      } else if (index === votingIndex) {
        node.fx = scaleX(-250);
        node.fy = scaleY(0);
      }
    });

    // Update the state to reflect the new graph data
    setGraphData(gData);
  }, [viewSize]);

  useEffect(() => {
    if (!simulationRef.current) {
      const simulation = forceSimulation()
        .force("charge", forceManyBody().strength(0))
        .force("center", forceCenter().x(0).y(0))
        .stop();

      for (let i = 0; i < 200; ++i) simulation.tick();

      simulationRef.current = simulation; // Save simulation to ref
    }

    setZoom(simulationRef.current.alpha() < 0.01 ? 2 : 1); // Or any other logic you prefer
  }, [graphData]);

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute" }}>
      <div className="overlay" />
      {graphData && (
        <ForceGraph2D
          ref={containerRef}
          graphData={graphData}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const { img, size } = node;
            if (images[img]) {
              const hoverSize = node.__hover
                ? size * hoverSizeMultiplier
                : size;

              ctx.save();
              ctx.beginPath();
              ctx.arc(node.x, node.y, hoverSize / 2, 0, 2 * Math.PI, false);
              ctx.clip();

              ctx.drawImage(
                images[img],
                node.x - hoverSize / 2,
                node.y - hoverSize / 2,
                hoverSize,
                hoverSize
              );

              ctx.beginPath();
              ctx.arc(node.x, node.y, hoverSize / 2, 0, 2 * Math.PI, false);
              ctx.strokeStyle = "white";
              ctx.stroke();

              ctx.restore();
            }
          }}
          onNodeHover={(node) => {
            if (node && !node.__hover) {
              setHoverStartTime(Date.now());
            }

            if (lastHoveredNode) {
              lastHoveredNode.__hover = false;
            }

            if (node) {
              node.__hover = true;
            }

            setLastHoveredNode(node);
          }}
          onNodeClick={(node) => {
            if (node) {
              node.__hover = false;
            }
          }}
          dagMode="null"
          zoom={zoom}
          backgroundColor="transparent"
          linkColor="transparent"
          linkWidth={1}
          enableNodeDrag={false}
          enableZoomPanInteraction={false}
        />
      )}
    </div>
  );
};

export default ImageGraph;
