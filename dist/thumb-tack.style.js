import {css} from "lit-element"; export const style = css`.thumb-tack,.thumb-tack .parent-node{position:relative}.parent-thumb-tack{display:flex;overflow:hidden;touch-action:none;outline:0}.thumb-tack{width:100%;height:100%;user-select:none;perspective:0}.thumb-tack .thumb-tack-node{display:flex;align-items:center;position:absolute;background:#0ff;width:160px;min-height:40px;border-radius:4px;border:2px solid #000;color:#000;z-index:2;padding:15px}.thumb-tack .thumb-tack-node.selected{background:red}.thumb-tack .thumb-tack-node:hover{cursor:move}.thumb-tack .thumb-tack-node .inputs,.thumb-tack .thumb-tack-node .outputs{width:0}.thumb-tack .thumb-tack-node .thumb-tack_content_node{width:100%;display:block}.thumb-tack .thumb-tack-node .input,.thumb-tack .thumb-tack-node .output{position:relative;width:20px;height:20px;background:#fff;border-radius:50%;border:2px solid #000;cursor:crosshair;z-index:1;margin-bottom:5px}.thumb-tack .thumb-tack-node .input{left:-27px;top:2px;background:#ff0}.thumb-tack .thumb-tack-node .output{right:-3px;top:2px}.thumb-tack svg{z-index:0;position:absolute;overflow:visible!important}.thumb-tack .connection{position:absolute;pointer-events:none;aspect-ratio:1/1}.thumb-tack .connection .main-path{fill:none;stroke-width:5px;stroke:#4682b4;pointer-events:all}.thumb-tack .connection .main-path:hover{stroke:#1266ab;cursor:pointer}.thumb-tack .connection .main-path.selected{stroke:#43b993}.thumb-tack .connection .point{cursor:move;stroke:#000;stroke-width:2;fill:#fff;pointer-events:all}.thumb-tack .connection .point.selected,.thumb-tack .connection .point:hover{fill:#1266ab}.thumb-tack .main-path{fill:none;stroke-width:5px;stroke:#4682b4}.thumb-tack-delete{position:absolute;display:block;width:30px;height:30px;background:#000;color:#fff;z-index:4;border:2px solid #fff;line-height:30px;font-weight:700;text-align:center;border-radius:50%;font-family:monospace;cursor:pointer}.thumb-tack>.thumb-tack-delete{margin-left:-15px;margin-top:15px}.parent-node .thumb-tack-delete{right:-15px;top:-15px}`;