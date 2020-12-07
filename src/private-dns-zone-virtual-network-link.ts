// https://www.terraform.io/docs/providers/azurerm/r/private_dns_zone_virtual_network_link.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivateDnsZoneVirtualNetworkLinkConfig extends cdktf.TerraformMetaArguments {
  readonly name: string;
  readonly privateDnsZoneName: string;
  readonly registrationEnabled?: boolean;
  readonly resourceGroupName: string;
  readonly tags?: { [key: string]: string };
  readonly virtualNetworkId: string;
  /** timeouts block */
  readonly timeouts?: PrivateDnsZoneVirtualNetworkLinkTimeouts;
}
export interface PrivateDnsZoneVirtualNetworkLinkTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly read?: string;
  readonly update?: string;
}

function privateDnsZoneVirtualNetworkLinkTimeoutsToTerraform(struct?: PrivateDnsZoneVirtualNetworkLinkTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class PrivateDnsZoneVirtualNetworkLink extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: PrivateDnsZoneVirtualNetworkLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_private_dns_zone_virtual_network_link',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._privateDnsZoneName = config.privateDnsZoneName;
    this._registrationEnabled = config.registrationEnabled;
    this._resourceGroupName = config.resourceGroupName;
    this._tags = config.tags;
    this._virtualNetworkId = config.virtualNetworkId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // private_dns_zone_name - computed: false, optional: false, required: true
  private _privateDnsZoneName: string;
  public get privateDnsZoneName() {
    return this.getStringAttribute('private_dns_zone_name');
  }
  public set privateDnsZoneName(value: string) {
    this._privateDnsZoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDnsZoneNameInput() {
    return this._privateDnsZoneName
  }

  // registration_enabled - computed: false, optional: true, required: false
  private _registrationEnabled?: boolean;
  public get registrationEnabled() {
    return this.getBooleanAttribute('registration_enabled');
  }
  public set registrationEnabled(value: boolean ) {
    this._registrationEnabled = value;
  }
  public resetRegistrationEnabled() {
    this._registrationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationEnabledInput() {
    return this._registrationEnabled
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string };
  public get tags() {
    return this.interpolationForAttribute('tags') as any;
  }
  public set tags(value: { [key: string]: string } ) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // virtual_network_id - computed: false, optional: false, required: true
  private _virtualNetworkId: string;
  public get virtualNetworkId() {
    return this.getStringAttribute('virtual_network_id');
  }
  public set virtualNetworkId(value: string) {
    this._virtualNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkIdInput() {
    return this._virtualNetworkId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivateDnsZoneVirtualNetworkLinkTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PrivateDnsZoneVirtualNetworkLinkTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      private_dns_zone_name: cdktf.stringToTerraform(this._privateDnsZoneName),
      registration_enabled: cdktf.booleanToTerraform(this._registrationEnabled),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
      virtual_network_id: cdktf.stringToTerraform(this._virtualNetworkId),
      timeouts: privateDnsZoneVirtualNetworkLinkTimeoutsToTerraform(this._timeouts),
    };
  }
}
