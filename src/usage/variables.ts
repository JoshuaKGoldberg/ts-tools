// Code largely based on https://github.com/ajafff/tsutils
// Original license: https://github.com/ajafff/tsutils/blob/26b195358ec36d59f00333115aa3ffd9611ca78b/LICENSE

import ts from "typescript";

import { DeclarationDomain, DeclarationInfo } from "./declarations";
import { UsageDomain } from "./getUsageDomain";
import { Scope } from "./Scope";

export type VariableCallback = (
	variable: VariableInfo,
	key: ts.Identifier,
	scope: Scope,
) => void;

export interface VariableInfo {
	declarations: ts.Identifier[];
	domain: DeclarationDomain;
	exported: boolean;
	inGlobalScope: boolean;
	uses: VariableUse[];
}

export interface VariableUse {
	domain: UsageDomain;
	location: ts.Identifier;
}

export interface InternalVariableInfo {
	declarations: DeclarationInfo[];
	domain: DeclarationDomain;
	uses: VariableUse[];
}