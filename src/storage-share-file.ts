// https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageShareFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#content_disposition StorageShareFile#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#content_encoding StorageShareFile#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#content_md5 StorageShareFile#content_md5}
  */
  readonly contentMd5?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#content_type StorageShareFile#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#metadata StorageShareFile#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#name StorageShareFile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#path StorageShareFile#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#source StorageShareFile#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#storage_share_id StorageShareFile#storage_share_id}
  */
  readonly storageShareId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#timeouts StorageShareFile#timeouts}
  */
  readonly timeouts?: StorageShareFileTimeouts;
}
export interface StorageShareFileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#create StorageShareFile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#delete StorageShareFile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#read StorageShareFile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html#update StorageShareFile#update}
  */
  readonly update?: string;
}

function storageShareFileTimeoutsToTerraform(struct?: StorageShareFileTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html azurerm_storage_share_file}
*/
export class StorageShareFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_storage_share_file";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/storage_share_file.html azurerm_storage_share_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageShareFileConfig
  */
  public constructor(scope: Construct, id: string, config: StorageShareFileConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_storage_share_file',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentMd5 = config.contentMd5;
    this._contentType = config.contentType;
    this._metadata = config.metadata;
    this._name = config.name;
    this._path = config.path;
    this._source = config.source;
    this._storageShareId = config.storageShareId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string;
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string ) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string;
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string ) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding
  }

  // content_md5 - computed: false, optional: true, required: false
  private _contentMd5?: string;
  public get contentMd5() {
    return this.getStringAttribute('content_md5');
  }
  public set contentMd5(value: string ) {
    this._contentMd5 = value;
  }
  public resetContentMd5() {
    this._contentMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentMd5Input() {
    return this._contentMd5
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string;
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string ) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable;
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // path - computed: false, optional: true, required: false
  private _path?: string;
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string ) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path
  }

  // source - computed: false, optional: true, required: false
  private _source?: string;
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string ) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source
  }

  // storage_share_id - computed: false, optional: false, required: true
  private _storageShareId: string;
  public get storageShareId() {
    return this.getStringAttribute('storage_share_id');
  }
  public set storageShareId(value: string) {
    this._storageShareId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageShareIdInput() {
    return this._storageShareId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StorageShareFileTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StorageShareFileTimeouts ) {
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
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_md5: cdktf.stringToTerraform(this._contentMd5),
      content_type: cdktf.stringToTerraform(this._contentType),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      path: cdktf.stringToTerraform(this._path),
      source: cdktf.stringToTerraform(this._source),
      storage_share_id: cdktf.stringToTerraform(this._storageShareId),
      timeouts: storageShareFileTimeoutsToTerraform(this._timeouts),
    };
  }
}
