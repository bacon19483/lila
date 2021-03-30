"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shogiops_1 = require("shogiops");
const fen_1 = require("shogiops/fen");
const util_1 = require("./util");
class CurrentPuzzle {
    constructor(index, puzzle) {
        this.index = index;
        this.puzzle = puzzle;
        this.moveIndex = 0;
        this.position = () => {
            const pos = shogiops_1.Shogi.fromSetup(fen_1.parseFen(this.puzzle.fen).unwrap()).unwrap();
            this.line.slice(0, this.moveIndex + 1).forEach(uci => pos.play(shogiops_1.parseUsi(uci)));
            return pos;
        };
        this.expectedMove = () => this.line[this.moveIndex + 1];
        this.lastMove = () => this.line[this.moveIndex];
        this.isOver = () => this.moveIndex >= this.line.length - 1;
        this.line = puzzle.line.split(' ');
        this.pov = shogiops_1.opposite(fen_1.parseFen(puzzle.fen).unwrap().turn);
        this.startAt = util_1.getNow();
    }
}
exports.default = CurrentPuzzle;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNyYy9jdXJyZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXFEO0FBQ3JELHNDQUF3QztBQUV4QyxpQ0FBZ0M7QUFFaEMsTUFBcUIsYUFBYTtJQU1oQyxZQUFxQixLQUFhLEVBQVcsTUFBYztRQUF0QyxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVcsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUgzRCxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBU3RCLGFBQVEsR0FBRyxHQUFVLEVBQUU7WUFDckIsTUFBTSxHQUFHLEdBQUcsZ0JBQUssQ0FBQyxTQUFTLENBQUMsY0FBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN6RSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFRLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2hGLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDO1FBRUYsaUJBQVksR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFbkQsYUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTNDLFdBQU0sR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQWZwRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsbUJBQVEsQ0FBQyxjQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxPQUFPLEdBQUcsYUFBTSxFQUFFLENBQUM7SUFDMUIsQ0FBQztDQWFGO0FBdkJELGdDQXVCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNob2dpLCBvcHBvc2l0ZSwgcGFyc2VVc2kgfSBmcm9tICdzaG9naW9wcyc7XG5pbXBvcnQgeyBwYXJzZUZlbiB9IGZyb20gJ3Nob2dpb3BzL2Zlbic7XG5pbXBvcnQgeyBQdXp6bGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgZ2V0Tm93IH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VycmVudFB1enpsZSB7XG4gIGxpbmU6IFVjaVtdO1xuICBzdGFydEF0OiBudW1iZXI7XG4gIG1vdmVJbmRleDogbnVtYmVyID0gMDtcbiAgcG92OiBDb2xvcjtcblxuICBjb25zdHJ1Y3RvcihyZWFkb25seSBpbmRleDogbnVtYmVyLCByZWFkb25seSBwdXp6bGU6IFB1enpsZSkge1xuICAgIHRoaXMubGluZSA9IHB1enpsZS5saW5lLnNwbGl0KCcgJyk7XG4gICAgdGhpcy5wb3YgPSBvcHBvc2l0ZShwYXJzZUZlbihwdXp6bGUuZmVuKS51bndyYXAoKS50dXJuKTtcbiAgICB0aGlzLnN0YXJ0QXQgPSBnZXROb3coKTtcbiAgfVxuXG4gIHBvc2l0aW9uID0gKCk6IFNob2dpID0+IHtcbiAgICBjb25zdCBwb3MgPSBTaG9naS5mcm9tU2V0dXAocGFyc2VGZW4odGhpcy5wdXp6bGUuZmVuKS51bndyYXAoKSkudW53cmFwKCk7XG4gICAgdGhpcy5saW5lLnNsaWNlKDAsIHRoaXMubW92ZUluZGV4ICsgMSkuZm9yRWFjaCh1Y2kgPT4gcG9zLnBsYXkocGFyc2VVc2kodWNpKSEpKTtcbiAgICByZXR1cm4gcG9zO1xuICB9O1xuXG4gIGV4cGVjdGVkTW92ZSA9ICgpID0+IHRoaXMubGluZVt0aGlzLm1vdmVJbmRleCArIDFdO1xuXG4gIGxhc3RNb3ZlID0gKCkgPT4gdGhpcy5saW5lW3RoaXMubW92ZUluZGV4XTtcblxuICBpc092ZXIgPSAoKSA9PiB0aGlzLm1vdmVJbmRleCA+PSB0aGlzLmxpbmUubGVuZ3RoIC0gMTtcbn1cbiJdfQ==